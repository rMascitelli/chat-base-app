function clearReceived() {
    let rcvd = document.getElementById("payload")
    rcvd.innerHTML = "";
}
  
function PayloadAnalyzer() {
  return (
    <div className="payload-analyzer">
      <button onClick={clearReceived} style={{'margin-top': '10px', 'margin-bottom': '10px'}}>Clear Payload field</button>
      <pre id="payload" className="payload-box"><span>Nothing sent yet...</span></pre>
    </div>
  );
}

export {PayloadAnalyzer};