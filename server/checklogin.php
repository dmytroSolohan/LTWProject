<?php
    
    //prove per vedere come funziona
    $errors = array('email', 'ciccio'); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    if(isset($_POST)){
            
        require 'db.php';

        $mail = $_POST['mail'];
        $password = $_POST['password'];

        //questa va poi modificata con il db appartenente
        $sql = "SELECT * FROM UTENTE WHERE email=?;";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare(stmt, $sql)){
            //gestire l'errore 
        }
        else {
            mysqli_stmt_bind_param($stmt, "s", $mail);
            mysql_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if($riga = mysqli_fetch_assoc($result)){

                $pswCheck = password_verify($password, $row['psw']);

                if(!$pswCheck)
                {
                    //password errata
                }
                else if($pswCheck)
                {
                    //creare una sessione per salvare l'eamil dell'utente
                }
            }
            else {
                //gestire errore
            }
        }
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        if (!empty($errors)) { //If errors in validation
            $form_data['success'] = false;
            $form_data['errors']  = $errors;
        }

        else { //If not, process the form, and return true on success
            $form_data['success'] = true;
            $form_data['posted'] = 'Data Was Posted Successfully';
        }
    
        echo json_encode($form_data);
    }
    else {
        header("Location: ../index.html");
        exit();
    }
    
?>