<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false, 'mail' => false); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    //if(isset($_POST['sign-up'])){
        
        require 'db.php';

        $email = $_POST['email'];
        $password = $_POST['passw'];
        
        //questa va poi modificata con il db appartenente
        $sql = "SELECT email FROM UTENTE WHERE email=?;";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            //gestire l'errore di connessione sql error
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $result = mysqli_stmt_num_rows($stmt);
            if($result > 0){
                //utente esistente
                $errors['mail'] = true; //problma db
                $form_data['posted'] = 'Email esistente !';
            }
            else {
                $sql = "INSERT INTO UTENTE (email, psw) VALUES (?, ?);";
                $stmt = mysqli_stmt_init($conn);

                if(!mysqli_stmt_prepare($stmt, $sql)){
                    //gestire di nuovo errore sql
                    $errors['db'] = true; //problma db
                    $form_data['posted'] = 'DB problem !';
                }
                else {
                    $hashpsw = password_hash($password, PASSWORD_DEFAULT);

                    mysqli_stmt_bind_param($stmt, "ss", $email, $hashpsw);
                    mysqli_stmt_execute($stmt);

                    $form_data['success'] = true;
                    $form_data['posted'] = 'Successo';
                }
            }
        }
        mysqli_stmt_close($stmt);
        mysqli_close($conn);


        if ($errors['db'] || $errors['mail']) { //If errors in validation
            $form_data['success'] = false;
            $form_data['errors']  = $errors;
        }
    
        echo json_encode($form_data);
    /*}
    
    else {
        header("Location: ../index.html");
        exit();
    }
    */
?>