<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false, 'mail' => false, 'psw' => false); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    if(isset($_POST['mail'])){
            
        require 'db.php';

        $mail = $_POST['mail'];
        $password = $_POST['password'];        

        //questa va poi modificata con il db appartenente
        $sql = "SELECT * FROM UTENTE WHERE email=?;";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            mysqli_stmt_bind_param($stmt, "s", $mail);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if($riga = mysqli_fetch_assoc($result)){

                $pswCheck = password_verify($password, $riga['psw']);

                if(!$pswCheck)
                {
                    $errors['psw'] = true; //password errata
                    $form_data['posted'] = 'Password errata!';
                }
                else if($pswCheck)
                {
                    $form_data['success'] = true;
                    $form_data['posted'] = 'Successo';
                    $form_data['userId'] = $riga['ID'];
                }
            }
            else {
                $errors['mail'] = true;
                $form_data['posted'] = 'Email non presente';
            }
        }
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        if ($errors['db'] || $errors['mail'] || $errors['psw']) { //If errors in validation
            $form_data['success'] = false;
            $form_data['errors']  = $errors;
        }

        echo json_encode($form_data);
    }
    
    else {
        header("Location: ../index.html");
        exit();
    } 
    
?>