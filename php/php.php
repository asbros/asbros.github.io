<?php 

$source_code = file('https://www.geeksforgeeks.org'); 
echo "<script>localStorage.setItem('code', '".$source_code."')</script>";
foreach ($source_code as $line_number => $last_line) { 

    echo nl2br(htmlspecialchars($last_line) . "\n"); 
} 
  
?>
