        //this is dictionary to add updates in different years
        var yearsUpdates={
            "2024":"Here we can post 2024 updates and achievements",
            "2023":"Here we can post 2023 updates and achievements",
            "2022":"Here we can post 2022 updates and achievements",
            "2021":"Here we can post 2021 updates and achievements",
        }
        function changeFct(firstTime) //first time is true --> then the selected year is 2024
        {
            var selectedYear;
            if(firstTime){
            selectedYear=2024; // selected year is 2024 for first time
            }else{
            selectedYear=document.getElementById("selectedYear").value;// retrieve value from user
            }
            document.querySelector(".updates_div_titles").textContent="Year "+selectedYear+" Updates";
            document.querySelector(".updates_div_pars").textContent = yearsUpdates[selectedYear];
        }
        changeFct(true)