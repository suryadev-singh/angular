

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <title>Affle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- bootstrap & fontawesome : Include CSS And JS Files -->
    <?php include("../common/xResponsive.inc.php"); ?>
    <script src="../common/js/render-table.js"></script>
    <script>
      jQuery(function($) {
        getList();
      });
    </script>
  </head>

  <body class="no-skin">
    <?php include("../common/header.inc.php"); ?>
    <div class="main-container" id="main-container">
      <script type="text/javascript">
        try {
          ace.settings.check('main-container', 'fixed');
        } catch (e) {
        }
      </script>
      <?php include("../common/sidebar.inc.php"); ?>
      <div class="main-content">
        <?php include("../common/breadCrumb.inc.php"); ?>
        <div class="page-content">
          <?php include("../common/setting.inc.php"); ?>
          <?php include("../common/tblRecord.inc.php"); ?>
        </div><!-- /.page-content -->
      </div><!-- /.main-content -->
    </div><!-- /.main-container -->
    <div id="outPopUp" class="hide"></div>
    <?php include("../common/footer.inc.php"); ?>
  </body>
  <script src="js/advertiser.js"></script>
</html>
