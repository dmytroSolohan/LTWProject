<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false); //To store errors
    $form_data = array(); //Pass back the data 
    
    /* Validate the form on the server side */
    if(isset($_POST['ID']) && isset($_POST['materia'])){
        
        require 'db.php';

        $id = $_POST['id'];
        $materia = $_POST['materia']; 
        $nome_prof = $_POST['nome_prof'];
        $aula = $_POST['aula'];
        $data = $_POST['date'];
        $voto = $_POST['voto'];
        $descrizione = $_POST['descrizione'];

        //questa va poi modificata con il db appartenente
        $sql = "INSERT INTO NOTE (materia, nome_prof, aula, data, voto, descrizione, FK_stud) VALUES (?, ?, ?, ?, ?, ?, ?);";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            //gestire l'errore di connessione sql error
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            mysqli_stmt_bind_param($stmt, "ssssisi", $materia, $nome_prof, $aula,  $data, $voto, $descrizione, $id);
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
    }
    
    else {
        header("Location: ../index.html");
        exit();
    }
    
?>