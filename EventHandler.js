function EventHandler(arr){
    this.array = arr;

    this.getEventsBetweenDates = function(start, end){
        var arr2;

        arr2 = this.array.filter(function(element){
            return ((element['dateStart'] >= start) && element['dateStart'] <= end);
        });

        return arr2;
    }

    this.getByMonth = function(month){
        var arr2;

        arr2 = this.array.filter(function(element){
            return ((element['dateStart'][5] + element['dateStart'][6]) == month);
        });

        return arr2;
    }

    this.getUniqueDateAndSort = function(){

        var startArr = [];
        var endArr = [];
        var arr4 = [];
        var arr3;

        var arr2 = this.array;

        arr3 = arr2.map(function(element, index){
            if(!startArr.includes(element['dateStart']) || !endArr.includes(element['dateEnd'])){
                // element.push(index);
                startArr.push(element['dateStart']);
                endArr.push(element['dateEnd']);
                arr4.push(element);
            }
            return element;
        });

        var arr2 = arr4;
        
        arr2.sort(function compare(a, b) {
            var dateA = new Date(a.dateStart);
            var dateB = new Date(b.dateStart);
            return dateA - dateB;
        });

        return arr2;
    }

    this.getSummary = function(arr){

        var stringReturn = [];

        if(typeof arr == 'undefined'){
            arr = this.array;

            var arr2 = arr.map(function(element, index){
                if(element['dateStart'] == element['dateEnd']){
                    stringReturn.push("On " + element['dateStart'] + ": " + element['name'] + " (" + element['description'] + ")");
                }else{
                    stringReturn.push("From " + element['dateStart'] + " to " + element['dateEnd'] + ": " + element['name'] + " (" + element['description'] + ")");
                }
            });
    
            return stringReturn;
        }else if(Array.isArray(arr)){
            var arr2 = arr.map(function(element, index){
                if(element['dateStart'] == element['dateEnd']){
                    stringReturn.push("On " + element['dateStart'] + ": " + element['name'] + " (" + element['description'] + ")");
                }else{
                    stringReturn.push("From " + element['dateStart'] + " to " + element['dateEnd'] + ": " + element['name'] + " (" + element['description'] + ")");
                }
            });
    
            return stringReturn;
        }else if(arr.constructor === Object){
            if(arr['dateStart'] == arr['dateEnd']){
                stringReturn.push("On " + arr['dateStart'] + ": " + arr['name'] + " (" + arr['description'] + ")");
            }else{
                stringReturn.push("From " + arr['dateStart'] + " to " + arr['dateEnd'] + ": " + arr['name'] + " (" + arr['description'] + ")");
            }
    
            return stringReturn;
        }else{
            return;
        }

    
    }
}

var handler = new EventHandler(events);
// console.log(handler.getEventsBetweenDates('2022/02/01', '2022/02/16'));
// console.log(handler.getByMonth(06));
// console.log(handler.getUniqueDateAndSort());
// console.log(handler.getSummary({name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'}, {name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'}));
// console.log(handler.getSummary());

// handler.prototype.dates = handler.getEventsBetweenDates();
// handler.prototype.getByMonth = handler.getByMonth();
// handler.prototype.getUniqueDateAndSort = handler.getUniqueDateAndSort();
// handler.prototype.getSummary = handler.getSummary();

Array.prototype.getByMonth = function(months){
    return handler.getByMonth(months);
}

Array.prototype.getEventsBetweenDates = function(start, end){
    return handler.getEventsBetweenDates(start, end);
}

Array.prototype.getUniqueDateAndSort = function(){
    return handler.getUniqueDateAndSort();
}

Array.prototype.getSummary = function(arr){
    return handler.getSummary(this);
}

// console.log(handler.getByMonth(06).getSummary());