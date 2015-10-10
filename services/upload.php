<?php

// Turn off all error reporting
error_reporting(0);

include 'dbconnect.php';
//var_dump($_FILES);
if ($conn) {
    if (isset($_POST['imei']) && isset($_POST['customer']) && isset($_POST['configuration']) && isset($_POST['sim'])) {
        $imei = $_POST['imei'];
        $customer = $_POST['customer'];
        $configuration = $_POST['configuration'];
        $sim = $_POST['sim'];
        $query = "INSERT INTO [RIM].[dbo].[RemoteTerminal] (IMEI, CUSTOMER, CONFIGURATION, SIM) VALUES
                (
                    '" . addslashes($imei) . "',
                    '" . addslashes($customer) . "',
                    '" . addslashes($configuration) . "',
                    '" . addslashes($sim) . "'
                )
            ";
        $statement = sqlsrv_query($conn, $query);

        die(print_r(sqlsrv_errors(), true));
    } else if ($_FILES[csv][size] > 0) {


        $query = "INSERT [RIM].[dbo].[RemoteTerminal] (IMEI, CUSTOMER, CONFIGURATION, SIM) values ( ? , ? , ?, ? )";
        $param1 = '1'; // this will hold col1 from the CSV
        $param2 = '1'; // this will hold col2 from the CSV
        $param3 = '1'; // this will hold col3 from the CSV
        $param4 = '1'; // this will hold col3 from the CSV
        $params = array($param1, $param2, $param3, $param4);
        $prep = sqlsrv_prepare($conn, $query, $params);
        //get the csv file
        $file = $_FILES['csv']['tmp_name'];
        $csv_array = file($file);
        foreach ($csv_array as $row_num => $row) {
            $row = trim($row);
            $column = explode(',', $row);
            $param1 = $column[0];
            $param2 = $column[1];
            $param3 = $column[2];
            $param4 = $column[3];

            // insert the row
            $result = sqlsrv_execute($prep);
        }

    } else if (isset($_POST['imei']) && isset($_POST['asset']) && isset($_POST['location']) && isset($_POST['startDate']) && isset($_POST['endDate']) && isset($_POST['agenda']) && isset($_POST['report']) && isset($_POST['comments'])) {
        $imei = $_POST['imei'];
        $asset = $_POST['asset'];
        $location = $_POST['location'];
        $startDate = $_POST['startDate'];
        $endDate = $_POST['endDate'];
        $agenda = $_POST['agenda'];
        $report = $_POST['report'];
        $comments = $_POST['comments'];
        $query = "INSERT INTO [RIM].[dbo].[Inspection] ([IMEI],[Asset],[Location],[STARTDATE],[ENDDATE],[AGENDA],[REPORT],[COMMENTS]) VALUES
                (
                    '" . addslashes($imei) . "',
                    '" . addslashes($asset) . "',
                    '" . addslashes($location) . "',
                    '" . addslashes($startDate) . "',
                    '" . addslashes($endDate) . "',
                    '" . addslashes($agenda) . "',
                    '" . addslashes($report) . "',
                    '" . addslashes($comments) . "'
                )
            ";
        $statement = sqlsrv_query($conn, $query);

        die(print_r(sqlsrv_errors(), true));
    }
}

