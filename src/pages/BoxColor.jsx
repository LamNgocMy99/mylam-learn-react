import React, { useState } from 'react';

function BoxColor () {
    const [colors,setColors] = useState({
      redBox : "#fa0a0a",
      goldBox: "#fae60a",
      aquaBox : "#0ac2fa",
      purpleBox : "#b100f7"
    })
    const [isChoose,setIsChoose] = useState(false)
    const handleClick = (e) => {
      const colorChoose = e.currentTarget.style.background;
      if(e.currentTarget.id && !isChoose){
        setColors(prevState => {
          return { 
            redBox :colorChoose,
            goldBox: colorChoose,
            aquaBox : colorChoose,
            purpleBox : colorChoose
            }                
          })
        }else {
          setColors(prevState => {
            return { 
              redBox : "#fa0a0a",
              goldBox: "#fae60a",
              aquaBox : "#0ac2fa",
              purpleBox : "#b100f7"
            }                
          })
        }
        setIsChoose(prevState => !prevState)
      }
    return (
      <div className='container' style={{display:"flex", width: 450 , flexWrap: "wrap" }}>
              <div className="box box-table" style={{display:"table", width: 200, height: 200, background: colors.redBox }} id ="redBox" onClick = {handleClick}>
                <p style={{
                          textAlign: "center",
                          display: "table-cell",
                          verticalAlign:"middle",
                          }}>
                     <b>Red</b>
                </p>
              </div>
              <div className="box box-table" style={{display:"table", width: 200, height: 200, background: colors.goldBox }} id ="goldBox" onClick = {handleClick}>
                  <p style={{
                            textAlign: "center",
                            display: "table-cell",
                            verticalAlign:"middle",
                            }}>
                        <b>Gold</b>
                  </p>
              </div>
              <div className="box box-table" style={{display:"table", width: 200, height: 200, background: colors.aquaBox }} id ="aquaBox" onClick = {handleClick}>
                <p style={{
                          textAlign: "center",
                          display: "table-cell",
                          verticalAlign:"middle",
                          }}>
                      <b>Aqua</b>
                </p>
              </div>
              <div className="box box-table" style={{display:"table", width: 200, height: 200, background: colors.purpleBox }} id ="purpleBox" onClick = {handleClick}>
                <p style={{
                    textAlign: "center",
                    display: "table-cell",
                    verticalAlign:"middle",
                    }}>
                      <b>Purple</b>
                 </p>
              </div>
            
    </div>
  );
}

export default BoxColor;
