

function searchText(searchStr){
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search="+searchStr ,
        dataType: 'jsonp',
        type: 'POST',
        headers:{
           'Api-User-Agent': 'Example/1.0' 
        },
        success: function(obj){
            console.log(obj);
            $("div.resultDiv").remove();
            for(i = 1; i < obj[1].length; i++){
                var name = obj[1][i];
                var description = obj[2][i];
                var link = obj[3][i];
                
                var resultDiv = document.createElement('div');
                resultDiv.className = 'resultDiv';
                resultDiv.setAttribute("onClick","window.open\('" + link + "','_blank'\)");
                var result = document.getElementById('result');
                result.appendChild(resultDiv);
                resultDiv.innerHTML = "<h2>"+ name +"</h2>" + "</br>"+ description;
                
            }
        }
        
    });
};

$(document).ready(function(){
    $("#searchIcon").on('click', function(){
            document.getElementById("searchIcon").style.display="none";
            document.getElementById("searchBox").style.display = "block";
    });
    
    $("#removeButton").on('click',function(){
            document.getElementById("searchIcon").style.display="block";
            document.getElementById("searchBox").style.display = "none";
    });
    
    var search = document.getElementById("searchStr");
    search.addEventListener("keydown", function(e){
        if(e.keyCode === 13){
            var searchStr = $("#searchStr").val();
            searchText(searchStr);
        }
    });
});
