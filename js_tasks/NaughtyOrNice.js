function naughtyOrNice(yearData) {
    let naughtyCount = 0;
       let niceCount = 0;
   
       for (let month in yearData) {
           for (let day in yearData[month]) {
               if (yearData[month][day] === 'Naughty') {
                   naughtyCount++;
               } else if (yearData[month][day] === 'Nice') {
                   niceCount++;
               }
           }
       }
   
       if (naughtyCount > niceCount) {
           return "Naughty!";
       } else if (niceCount > naughtyCount) {
           return "Nice!";
       } else {
           return "Nice!";
       }
   }
   
     
     //entering the data
   let yearData = {
       January: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, 
     February: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice"}, 
     March: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, 
     April: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, 
     May: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, 
     June: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, 
     July: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, 
     August: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, 
     September: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, 
     October: {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, 
     November: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, 
     December: {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"},
   
   }
   
     console.log(naughtyOrNice(yearData));
