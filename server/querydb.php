<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false); //To store errors
    $form_data = array(); //Pass back the data 
    $data = array();

/* Validate the form on the server side */
    //if(isset($_POST['log-in'])){
            
        require 'db.php';

        $id = $_POST['id'];
        
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

                $row = array();
                array_push($row, $riga['materia']);
                array_push($row, $riga['nome_prof']);
                array_push($row, $riga['aula']);
                array_push($row, $riga['data']);
                array_push($row, $riga['voto']);
                array_push($row, $riga['descrizione']);

                array_push($data, $row);

            }
            
            $form_data['success'] = true;
            $form_data['posted'] = 'Success !';
            $form_data['data'] = $data;

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