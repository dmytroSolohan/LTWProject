<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    //if(isset($_POST['yep'])){
        
        require 'db.php';

        $id = $_POST['id'];
        $username = $_POST['username']; 
        $nome = $_POST['nome'];
        $cognome = $_POST['cognome'];
        $data_nascita = $_POST['data_nascita'];
        $indirizzo = $_POST['indirizzo'];
        $citta = $_POST['citta'];
        $paese = $_POST['paese'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];


        $sql = "UPDATE UTENTE SET username = '$username', nome = '$nome', cognome = '$cognome', data_nascita = '$data_nascita', indirizzo ='$indirizzo', citta = '$citta', paese = '$paese', email = '$email', telefono = '$telefono', WHERE id=$id";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            //gestire l'errore di connessione sql error
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            mysqli_stmt_bind_param($stmt, "ssssiss", $username, $nome, $cognome,  $data_nascita, $citta, $paese, $email, $telefono, $id);
            mysqli_stmt_execute($stmt);
                      
            $form_data['success'] = true;
            $form_data['posted'] = 'Successo';
        }
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        if ($errors['db']) { //If errors in validation
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