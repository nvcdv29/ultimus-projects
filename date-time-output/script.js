var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        document.getElementById("date").innerHTML = day + "." + month + "." + year;

        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        document.getElementById("time").innerHTML = hours + ":" + minutes;

        function getInput() {
            let dateInput = document.getElementById("dateInput").value;
            let timeInput = document.getElementById("timeInput").value;
            document.getElementById("outputInput").innerHTML = "Your Input: " + dateInput + " " + timeInput;
        }
		
		function GetTimeFormat() {
			debugger;
            let dateInput = document.getElementById("dateInput").value;
            let timeInput = document.getElementById("timeInput").value;
			var datestring = dateInput + " " + timeInput;
			var d = new Date(datestring);
			alert (d);
            var Day = 24*60*60*1000;
			document.getElementById("outputInput").innerHTML = timeSince(d*Day);
        }
		
		function timeSince(date) {

            //var GivenDate = dateInput;
            //var CurrentDate = "today";
            let today = new Date();

            if(date > today){
               return date;

               var FormattedDate = date.getDate();

               
            }else{
                var seconds = Math.floor((new Date() - date) / 1000);

                var interval = seconds / 31536000;

                if (interval > 1) {
                return Math.floor(interval) + " years ago";
                }
                interval = seconds / 2592000;
                if (interval > 1) {
                return Math.floor(interval) + " months ago";
                }
                interval = seconds / 86400;
                if (interval > 1) {
                return Math.floor(interval) + " days ago";
                }
                interval = seconds / 3600;
                if (interval > 1) {
                return Math.floor(interval) + " hours ago";
                }
                interval = seconds / 60;
                if (interval > 1) {
                return Math.floor(interval) + " minutes ago";
                }
                return Math.floor(seconds) + " seconds ago";
            }

			
			  
		 // }
		}
		
		
		

        // var timeago = new Date();
        // moment(outputInput).fromNow();
        // document.getElementById("dateInput").innerHTML = timeago;