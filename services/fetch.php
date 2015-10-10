<?php
/**
 * Created by PhpStorm.
 * User: zubair
 * Date: 26/09/2015
 * Time: 17:03
 */

// Turn off all error reporting
error_reporting(0);

include 'dbconnect.php';

if ($conn) {
    $limit = 10;
    if (isset($_GET["purpose"])) {
        $purpose = $_GET["purpose"];
        if($purpose=='inventoryPage'){
            if (isset($_GET["page"])) {
                $page = $_GET["page"];
            } else {
                $page = 1;
            };
            $n = (($page) * $limit);
            $x = ((($page) * $limit) - $limit);
            $query = "select * from (SELECT top $n * FROM [RIM].[dbo].[RemoteTerminal] order by IMEI ) as foo except select * from ( SELECT top $x * FROM [RIM].[dbo].[RemoteTerminal] order by IMEI ) as bar";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = array(imei => $row['IMEI'], customer => $row['CUSTOMER'], configuration => $row['CONFIGURATION'], sim => $row['SIM']);
            }
            print json_encode($r);
        }else if($purpose=='inventoryCount'){
            $query = "select count(*) as Count  FROM [RIM].[dbo].[RemoteTerminal]";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = $row['Count'];
            }
            print json_encode($r);
        } else if($purpose=='InspectionPage'){
            if (isset($_GET["page"])) {
                $page = $_GET["page"];
            } else {
                $page = 1;
            };
            $n = (($page) * $limit);
            $x = ((($page) * $limit) - $limit);
            $query = "select * from (SELECT top $n * FROM [RIM].[dbo].[Inspection] order by IMEI ) as foo except select * from ( SELECT top $x * FROM [RIM].[dbo].[Inspection] order by IMEI ) as bar";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = array(imei => $row['IMEI'], asset => $row['Asset'], location => $row['Location'] ,startDate => $row['STARTDATE'],endDate => $row['ENDDATE'],agenda => $row['AGENDA'],report => $row['REPORT'],comments => $row['COMMENTS']);
            }
            print json_encode($r);
        } else if($purpose=='InspectionCount'){
            $query = "select count(*) as Count  FROM [RIM].[dbo].[Inspection]";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = $row['Count'];
            }
            print json_encode($r);
        }else if($purpose=='TerminalInspections'){
            if (isset($_GET["page"])) {
                $page = $_GET["page"];
            } else {
                $page = 1;
            };
            $terminal = $_GET["terminal"];
            $n = (($page) * $limit);
            $x = ((($page) * $limit) - $limit);
            $query = "select * from (SELECT top $n * FROM [RIM].[dbo].[Inspection]  where IMEI like '%".$terminal."%' ) as foo except select * from ( SELECT top $x * FROM [RIM].[dbo].[Inspection]  where IMEI like '%".$terminal."%' ) as bar";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = array(imei => $row['IMEI'], asset => $row['Asset'], location => $row['Location'] ,startDate => $row['STARTDATE'],endDate => $row['ENDDATE'],agenda => $row['AGENDA'],report => $row['REPORT'],comments => $row['COMMENTS']);
            }
            print json_encode($r);
        }else if($purpose=='TerminalInspectionsCount'){
            $terminal = $_GET['terminal'];
            $query = "select count(*) as Count  FROM [RIM].[dbo].[Inspection] where IMEI like '%".$terminal."%'";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = $row['Count'];
            }
            print json_encode($r);
        } else if($purpose=='SearchInventory') {
            $query = $_GET['query'];
            //terminals
            $query = "select count(*) as Count  FROM [RIM].[dbo].[Inspection] where IMEI like '%" . $query . "%'";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = $row['Count'];
            }
            if($r){

            };
            //customer
            $query = "select count(*) as Count  FROM [RIM].[dbo].[Inspection] where IMEI like '%" . $query . "%'";
            $statement = sqlsrv_query($conn, $query);
            $r = array();
            while ($row = sqlsrv_fetch_array($statement, SQLSRV_FETCH_ASSOC)) {
                $r[] = $row['Count'];
            }
            if($r){
                var_dump($r);
            };
           // print json_encode($r);
        }
    }
}