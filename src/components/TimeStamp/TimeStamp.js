import React, { Component } from 'react';

class Timestamp extends Component {
    _inTime(date){
        return 'on ' + date.toString();
    }

    _inWords(date){
        return date;
    }

    _parse(date){
        if (date === '' || date === null) return false;
        // date = 'Thu Jun 28 2018 13:29:19 GMT-0500 (Central Daylight Time)';
        if (typeof date === 'number'){
            date = parseInt(date, 10);
            date = new Date(date * 1000);
        }
        
        // console.log(date.toJSON(), date.toString());
        date = date.toJSON();
        const t = date.split(/[:\-\+TZ\. ]/);
        
        let d = new Date('1/1/1970');
        d.setUTCFullYear(t[0]);
        d.setUTCMonth(t[1]-1);
        d.setUTCDate(t[2]);
        d.setUTCHours(t[3]);
        d.setUTCMinutes(t[4]);
        d.setUTCSeconds(t[5]);
        console.log(t,d);
        return d;
    }

    _format(date){
        let f_date = this._parse(date)

        if (!f_date) return 'never';

        f_date = this._inTime(f_date);

        return f_date;
    }

    render(){
        return ( <span className="timestamp">{this._format(this.props.time)}</span> );
    }
}

// Timestamp.defaultProps = {
    
// };

export default Timestamp;
