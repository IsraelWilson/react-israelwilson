<?php
if(isset($_POST["directory"])){
  $dir = "../pages/" + $_POST["directory"];
  $scanned_dir = array_diff(scandir($dir), array(".", ".."));

  $result = [];
  for($i = 0; $i < count($scanned_dir); $i++) {
    if(is_dir($scanned_dir[$i])) {
      $data = array_diff(scandir($scanned_dir[$i]), array(".", ".."));
      $result[] = $data;
    }
  }

  echo json_encode($result);
}
 ?>
