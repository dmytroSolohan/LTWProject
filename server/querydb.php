<?php
    
    //prove per vedere come funziona
    $errors = array('db' => false, 'req' => false); //To store errors
    $form_data = array(); //Pass back the data 
    $data = array();

/* Validate the form on the server side */
    if(isset($_POST['id']) && isset($_POST['in'])){
            
        require 'db.php';

        $id = $_POST['id'];
        $num = $_POST['in'];
        
        //questa va poi modificata con il db appartenente
        switch($num)
        {
            case '0':
                $sql = "SELECT * FROM NOTE WHERE FK_stud = ? ORDER BY data;";
            break;
            case '1':
                $sql = "SELECT nome_prof, materia, aula FROM NOTE WHERE FK_stud = ?;";
            break;
            case '2':
                $sql = "SELECT materia, voto FROM NOTE WHERE FK_stud = ? ORDER BY materia;";
            break;
            case '3':
                $sql = "SELECT materia, voto FROM NOTE WHERE FK_stud = ? ORDER BY voto desc;";
            break;
            case '4':
                $sql = "SELECT * FROM UTENTE WHERE ID = ?;";
            break;
        }
                        
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            $errors['db'] = true; //problma db
            $form_data['posted'] = 'DB problem !';
        }
        else {
            
            mysqli_stmt_bind_param($stmt, "i", $id);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            switch($num)
                {
                    case '0':
                    while($riga = mysqli_fetch_assoc($result))
                    {
                        $row = array();
                        array_push($row, $riga['materia']);
                        array_push($row, $riga['nome_prof']);
                        array_push($row, $riga['aula']);
                        array_push($row, $riga['data']);
                        if($riga['voto'] == null)
                            array_push($row, "Nessun voto");
                        else
                            array_push($row, $riga['voto']);
                        array_push($row, $riga['descrizione']);
    
                        array_push($data, $row);
                    }
                    break;
                    case '1':
                        while($riga = mysqli_fetch_assoc($result))
                    {
                        $row = array();

                        array_push($row, $riga['nome_prof']);
                        array_push($row, $riga['materia']);
                        array_push($row, $riga['aula']);
    
                        array_push($data, $row);    
                    }
                    break;
                    case '2':
                    case '3':
                        while($riga = mysqli_fetch_assoc($result))
                    {
                        $row = array();

                        array_push($row, $riga['materia']);
                        if($riga['voto'] == null)
                            array_push($row, "Nessun voto");
                        else
                            array_push($row, $riga['voto']);
    
                        array_push($data, $row);    
                    }
                    break;
                    case '4':
                        while($riga = mysqli_fetch_assoc($result))
                    {
                        $row = array();
                        array_push($row, $riga['username']);
                        array_push($row, $riga['nome']);
                        array_push($row, $riga['cognome']);
                        array_push($row, $riga['data_nascita']);
                        array_push($row, $riga['indirizzo']);
                        array_push($row, $riga['citta']);
                        array_push($row, $riga['paese']);
                        array_push($row, $riga['telefono']);
                        array_push($row, $riga['email']);
    
                        array_push($data, $row);  
                    }
                    break;
                    default:
                        $errors['req'] = true; //problma richiesta
                        $form_data['posted'] = 'Error request!';
                    break;
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
    }
    
    else {
        header("Location: ../index.html");
        exit();
    } 
    
?>