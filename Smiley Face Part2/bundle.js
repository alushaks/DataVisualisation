(function (React, ReactDOM) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500; 
  const centerX = width/2;
  const centerY = height/2; 
  const strokewidth = 10;
  const eyeOffsetX = 90;
  const eyeRadius =  50;
  //height/2- strokewidth/2
  //centerx -  eyeoffsetX



  const App = () => (
  React.createElement( 'svg', { width: width, height: height },
       React.createElement( 'circle', { 
               cx: centerX, cy: centerY, r: centerY -strokewidth/2, fill: "yellow", stroke: "black", 'stroke-width': strokewidth }),
          
    React.createElement( 'circle', { 
               cx: centerX-eyeOffsetX, cy: centerY-eyeOffsetX, r: eyeRadius }),
    
    React.createElement( 'circle', { 
               cx: centerX+eyeOffsetX, cy: centerY+eyeOffsetX, r: eyeRadius })
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7IFxuY29uc3QgY2VudGVyWCA9IHdpZHRoLzI7XG5jb25zdCBjZW50ZXJZID0gaGVpZ2h0LzI7IFxuY29uc3Qgc3Ryb2tld2lkdGggPSAxMDtcbmNvbnN0IGV5ZU9mZnNldFggPSA5MDtcbmNvbnN0IGV5ZU9mZnNldFkgPSAxMDA7XG5jb25zdCBleWVSYWRpdXMgPSAgNTA7XG4vL2hlaWdodC8yLSBzdHJva2V3aWR0aC8yXG4vL2NlbnRlcnggLSAgZXllb2Zmc2V0WFxuXG5cblxuY29uc3QgQXBwID0gKCkgPT4gKFxuPHN2ZyB3aWR0aCA9IHt3aWR0aH0gaGVpZ2h0ID17aGVpZ2h0fT5cbiAgICAgPGNpcmNsZSBcbiAgICAgICAgICAgICBjeD17Y2VudGVyWH1cbiAgICAgICAgICAgICBjeT17Y2VudGVyWX1cbiAgICAgICAgICAgICByPXtjZW50ZXJZIC1zdHJva2V3aWR0aC8yfVxuICAgICAgICAgICAgIGZpbGwgPVwieWVsbG93XCJcbiAgICAgICAgICAgICBzdHJva2UgPVwiYmxhY2tcIlxuICAgICAgICAgICAgIHN0cm9rZS13aWR0aCA9e3N0cm9rZXdpZHRofVxuICAgICAgIC8+XG4gICAgICAgIFxuICA8Y2lyY2xlIFxuICAgICAgICAgICAgIGN4PXtjZW50ZXJYLWV5ZU9mZnNldFh9XG4gICAgICAgICAgICAgY3k9e2NlbnRlclktZXllT2Zmc2V0WH1cbiAgICAgICAgICAgICByPXtleWVSYWRpdXN9XG4gICAgICAgICAgICAgXG4gICAgLz5cbiAgXG4gIDxjaXJjbGUgXG4gICAgICAgICAgICAgY3g9e2NlbnRlclgrZXllT2Zmc2V0WH1cbiAgICAgICAgICAgICBjeT17Y2VudGVyWStleWVPZmZzZXRYfVxuICAgICAgICAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgICAgICAgICBcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztFQUdBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztFQUNsQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7RUFDbkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQ3pCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztFQUN2QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsRUFDQSxNQUFNLFNBQVMsSUFBSSxFQUFFLENBQUM7Ozs7OztFQU10QixNQUFNLEdBQUcsR0FBRztFQUNaLDhCQUFLLE9BQVMsS0FBSyxFQUFFLFFBQVMsTUFBTTtPQUMvQjtlQUNRLElBQUksT0FBTyxFQUNYLElBQUksT0FBTyxFQUNYLEdBQUcsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQ3pCLE1BQU0sUUFBUSxFQUNkLFFBQVEsT0FBTyxFQUNmLGdCQUFlLFdBQVcsRUFBQzs7SUFHdEM7ZUFDVyxJQUFJLE9BQU8sQ0FBQyxVQUFXLEVBQ3ZCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFDdEIsR0FBRyxTQUFTLEVBQUM7O0lBSXhCO2VBQ1csSUFBSSxPQUFPLENBQUMsVUFBVyxFQUN2QixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQ3RCLEdBQUcsU0FBUyxFQUFDLENBRXBCO0tBQ0U7R0FDUCxDQUFDOztFQUVGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxxQkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXLENBQUM7Ozs7In0=