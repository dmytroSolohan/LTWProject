<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false); //To store errors
    $form_data = array(); //Pass back the data 
    $materia = array();
    $prof = array();
    $aula = array(); 
    $data = array(); 
    $voto = array(); 
    $descrizione = array();

/* Validate the form on the server side */
    //if(isset($_POST['log-in'])){
            
        require 'db.php';

        $id = $_POST['ID'];
        
        //questa va poi modificata con il db appartenente
        $sql = "SELECT * FROM NOTE WHERE FK_stud = ? ORDER BY data;";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            
            mysqli_stmt_bind_param($stmt, "i", $id);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            while($riga = mysqli_fetch_assoc($result)){

                array_push($materia, $riga['materia']);
                array_push($prof, $riga['nome_prof']);
                array_push($aula, $riga['aula']);
                array_push($data, $riga['data']);
                array_push($voto, $riga['voto']);
                array_push($descrizione, $riga['descrizione']);

            }
            
            $form_data['success'] = true;
            $form_data['posted'] = 'Success !';
            $form_data['data'] = array($materia, $prof, $aula, $data, $voto, $descrizione);

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
    } */
    
?>