<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false, 'req' => false); //To store errors
    $form_data = array(); //Pass back the data 
    $data = array();
    
/* Validate the form on the server side */

        echo("2");  
        require 'db.php';

        $id = $_POST['id'];
        
        
        //questa va poi modificata con il db appartenente
        
        $sql = "SELECT * FROM UTENTE WHERE FK_stud = ?";
                     
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            
            mysqli_stmt_bind_param($stmt, "i", $id);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            while($riga = mysqli_fetch_assoc($result))
                    {
                        $row = array();
                        array_push($row, $riga['username']);
                        array_push($row, $riga['nome']);
                        array_push($row, $riga['cognome']);
                        array_push($row, $riga['data_nascita']);
                        array_push($row, $riga['indirizzo']);
                        array_push($row, $riga['data_nascita']);
                        array_push($row, $riga['citta']);
                        array_push($row, $riga['paese']);
                        array_push($row, $riga['telefono']);
                        array_push($row, $riga['email']);
    
                        array_push($data, $row);
                    }
                    
                            
            $form_data['success'] = true;
            $form_data['posted'] = 'Success !';
            $form_data['data'] = $data;

        }
        mysqli_stmt_close($stmt);
        mysqli_close($conn);

        if ($errors['db'] || $errors['req']) { //If errors in validation
            $form_data['success'] = false;
            $form_data['errors']  = $errors;
        }
    
        echo json_encode($form_data);
    
?>