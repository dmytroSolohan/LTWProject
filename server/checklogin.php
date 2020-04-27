<?php
    /*
    $name = $_POST['mail'];
    $psw = $_POST['password'];

    $arr = array(
        "Email" => "ciccio@ciccio.it",
        "Password" => "1234qwer"
    );

    echo json_encode($array); */

    //collegarsi al db
    //fare la query
    //cercare persona per email
    //vedere se la password è corretta
    //mandare boolean della risposta

    //prove per vedere come funziona
    $errors = array(); //To store errors
    $form_data = array(); //Pass back the data to `form.php`

    /* Validate the form on the server side */
    if ($_POST['email' == 'ciccio@ciccio.it'] && $_POST['password' == '1234qwer']) { 
        $errors['email'] = 'ciccio@ciccio.it';
        $errors['passwrod'] = '1234qwer';
    }

    if (!empty($errors)) { //If errors in validation
        $form_data['success'] = false;
        $form_data['errors']  = $errors;
    }
    else { //If not, process the form, and return true on success
        $form_data['success'] = true;
        $form_data['posted'] = 'Data Was Posted Successfully';
    }

    //Return the data back to form.php
    echo json_encode($_POST);
?>