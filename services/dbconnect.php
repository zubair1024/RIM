<?php

$serverName = "ZUBAIR-LAPTOP"; //serverName\instanceName

// Since UID and PWD are not specified in the $connectionInfo array,
// The connection will be attempted using Windows Authentication.
$connectionInfo = array( "Database"=>"RIM");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
//    $query = ' SELECT NAME FROM [RIM].[dbo].[Customer]';
//    $statement = sqlsrv_query( $conn, $query);
//    $r =  array();
//    while( $row = sqlsrv_fetch_array( $statement, SQLSRV_FETCH_ASSOC))
//    {
//        $r[] = $row['NAME'];
//
//    }
//    print json_encode($r);
}else{
    echo "Connection could not be established.<br />";
    die( print_r( sqlsrv_errors(), true));
}