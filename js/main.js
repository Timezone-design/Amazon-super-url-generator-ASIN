var $ = jQuery;
jQuery(document).ready(function () {
  setTimeout(function () {

    console.log("jQuery Started!");

    var add_text = $("#marketplace-select").children("option:selected").val().toLowerCase();

    $(".variant-content__example").html("Example: https://www." + add_text + "/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sugar+scrub&field-brand=FOREST+HEAL&rh=i:aps,ssx:relevance");

    $("#marketplace-select").change(function () {
      add_text = $("#marketplace-select").children("option:selected").val().toLowerCase();

      $(".variant-content__example").empty();

      $(".variant-content__example").html("Example: https://www." + add_text + "/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sugar+scrub&field-brand=FOREST+HEAL&rh=i:aps,ssx:relevance");
    });

    $("button.create-btn").click(function() {
      var super_url;
      if (validateForm() == true) {
        super_url = calculateForm(add_text);
      }
      console.log(super_url);
      $("textarea.textarea").val(super_url);
    });
    
    $("#copy-btn").click(function() {
      console.log("Copied!");
      $("#calculator > div > div.variants-body > div.variants-content > div > div.result > textarea").select();
      document.execCommand('copy');
      $("span.status").val("Copied!");
    });
    
    $("#open-btn").click(function() {
      // console.log("clicked!");
      if ($("textarea.textarea").val().trim() != "") {
        window.open($("textarea.textarea").val(), '_blank');
      }
    });

  }, 1500);
});

function sliceSentence(str, slicer) {
  str = str.split(",").join(" ").split(".").join(" ").split("  ").join(" ");
  var wordArray = str.split(" ").join(slicer);
  return wordArray;
}

function calculateForm(add_text) {
  var brand = sliceSentence($("input#brand").val(), "+");
  var keyword = sliceSentence($("input#keyword").val(), "+");
  var asin = sliceSentence($("input#asin").val(), " ");

  var return_string;
  if (asin.length != 0) {
    return_string = "https://www." + add_text + "/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + keyword + "&field-brand=" + brand + "&field-asin=" + asin;
  } else {
    return_string = "https://www." + add_text + "/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + keyword + "&field-brand=" + brand;
  }

  return return_string;
}

function validateForm() {
  if ($("input#brand").val().trim() == "") {
    $("input#brand").css("border-color", "red");
    return false;
  } else {
    $("input#brand").css("border-color", "lightgrey");
  }
  if ($("input#keyword").val().trim() == "") {
    $("input#keyword").css("border-color", "red");
    return false;
  } else {
    $("input#keyword").css("border-color", "lightgrey");
  }
  if ($("input#asin").val().trim() != "" && $("input#asin").val().trim().length != 10) {
    $("input#asin").css("border-color", "red");
    return false;
  } else {
    $("input#asin").css("border-color", "lightgrey");
  }
  return true;
}