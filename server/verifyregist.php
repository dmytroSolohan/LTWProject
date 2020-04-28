<?php
    
    //prove per vedere come funziona
    $errors = array('email', 'ciccio'); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    if(isset($_POST)){
            
        require 'db.php';

        $email = $_POST['email'];
        $password = $_POST['password'];
        
        //questa va poi modificata con il db appartenente
        $sql = "SELECT email FROM UTENTE WHERE email=?;";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            //gestire l'errore di connessione sql error
        }
        else {
            mysqli_stmt_bind_param($stmt, "s", $mail);
            mysql_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $result = mysqli_stmt_num_rows($stmt);
            if($riga > 0){
                //utente esistente
            }
            else {
                $sql = "INSERT INTO UTENTE (email, password) VALUES(?, ?);";
                $stmt = mysqli_stmt_init($conn);

                if(!mysqli_stmt_prepare($stmt, $sql)){
                    //gesire di nuovo errore sql
                }
                else {
                    $hashpsw = password_hash($password, PASSWORD_DEFAULT);

                    mysqli_stmt_bind_param($stmt, "ss", $mail, $hashpsw);
                    mysql_stmt_execute($stmt);

                }
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