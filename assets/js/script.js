if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.replace("http://rhysimus.com/read");
}

function resize()
{
    var x = document.getElementById('bookcase');
    var y = document.getElementById('header');
    //if height smaller than 575px or width smaller than 500px, scale accordingly
    if(x != null)
    {
        y.style.transformOrigin = "left top";
        x.style.transformOrigin = "left center";
        if(window.innerHeight < 680 || window.innerWidth < 600)
        {
            var target = window.innerHeight < 680 ? window.innerHeight / 680 : window.innerWidth / 500;
            y.style.transform = 'scale(' + target + ') translate(-50%, 0%)';
            x.style.transform = 'scale(' + target + ') translate(-50%, -25%)';
        }
        else
        {
            y.style.transform = 'scale(1) translate(-50%, 0%)';
            if( window.innerWidth > 600)
            {
                x.style.transform = 'scale(1.3) translate(-50%, -20%)';
            }
        }
        if(window.innerHeight < 100)
        {
            var yes = '"position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;"';
            document.body.innerHTML = '<div style=' + yes + '>congrats, you found the special easter egg! 🥚</div>';
        }
    }
}

resize();

var specifiedElement = document.getElementById('surface');

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
var isClickInside = specifiedElement.contains(event.target);

if (!isClickInside && event.target.tagName != "INPUT") {
    //the click was outside the specifiedElement, do something
    document.getElementById('bookcase').reset();
    }
});

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });