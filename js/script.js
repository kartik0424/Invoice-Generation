document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input");
        const data = {};

        inputs.forEach((input, index) => {
            data[index] = input.value.trim().toUpperCase();
        });

        if (data[0] === "" || data[2] === "" || data[3] === "") {
            alert("Please fill required fields.");
            return;
        }

        const logo = "./media/acetech.png"; // keep logo image in same folder

        const receiptWindow = window.open("", "_blank", "width=900,height=750");

        receiptWindow.document.write(`
<html>
<head>
<title>AceTech Receipt</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#fff;
    padding:12px;
}

/* Receipt Size */
.receipt{
    width:190mm;
    height:95mm;
    margin:auto;
    border:1px solid #a52a2a;
    padding:10px 14px;
    color:#a52a2a;
}

/* Header */
.header{
    text-align:center;
    border-bottom:1px solid #c77;
    padding-bottom:5px;
    margin-bottom:8px;
}

.header h1{
    font-size:28px;
    letter-spacing:1px;
    font-weight:800;
}

.header p{
    font-size:12px;
    margin-top:2px;
}

.receipt-title{
    font-size:16px;
    font-weight:bold;
    text-decoration:underline;
    margin-top:4px;
}

/* Top Row */
.top-row{
    display:flex;
    justify-content:space-between;
    font-size:13px;
    margin-bottom:16px;
}

.line{
    display:inline-block;
    border-bottom:1px solid #a52a2a;
    min-width:110px;
    color:#000;
    padding-left:6px;
}

/* Fields */
.row{
    font-size:13px;
    margin:8px 0;
    margin-bottom: 12px;
}

.long{
    min-width:420px;
}

.mid{
    min-width:180px;
}

.small{
    min-width:120px;
}

/* Amount Box */
.amount-section{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-top:18px;
}

.rs-box{
    width:120px;
    height:42px;
    border:1px solid #a52a2a;
    border-radius:0 30px 30px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:18px;
}

.rs-box span{
    color:#000;
    margin-left:8px;
}

/* Signature */
.sign{
    text-align:center;
    width:180px;
}

.sign-space{
    height:28px;
}

.sign-line{
    border-top:1px solid #a52a2a;
    padding-top:4px;
    font-size:13px;
}

/* Print */
@media print{

@page{
    size:A4 portrait;
    margin:8mm;
}

body{
    padding:0;
}

.btn{
    display:none;
}

}
</style>
</head>

<body>

<div class="receipt">

    <!-- Header -->
    <div class="header">
        <h1>ACETECH</h1>
        <p>Plot No. 1, Bandhu Nagar,Near MB Town, Zingabai Takli, Nagpur-30</p>
        <div class="receipt-title">RECEIPT</div>
    </div>

    <!-- Top -->
    <div class="top-row">
        <div>
            Batch:
            <span class="line">${data[7]}</span>
        </div>

        <div>
            No:
            <span class="line">${data[0]}</span>
        </div>

        <div>
            Date:
            <span class="line">${data[1]}</span>
        </div>
    </div>

    <!-- Rows -->
    <div class="row">
        Received With thanks From
        <span class="line long">${data[2]}</span>
    </div>

    <div class="row">
        Rs. (in words)
        <span class="line long">${data[3]} Only</span>
    </div>

    <div class="row">
        Course
        <span class="line mid">${data[7]}</span>

        Installment
        <span class="line small">${data[4]}</span>
    </div>

    <div class="row">
        By Cash / online
        <span class="line small">${data[5]}</span>

        Dated
        <span class="line small">${data[1]}</span>

        of Bank
        <span class="line small">-</span>
    </div>

    <!-- Bottom -->
    <div class="amount-section">

        <div class="rs-box">
            Rs. <span>${data[3]}</span>
        </div>

        <div class="sign">
            <div class="sign-space"></div>
            <div class="sign-line">For, ACETECH</div>
        </div>

    </div>

</div>

<div class="btn" style="text-align:center;margin-top:15px;">
    <button onclick="window.print()" style="padding:10px 22px;cursor:pointer;">
        Print Receipt
    </button>
</div>

</body>
</html>
        `);

        receiptWindow.document.close();
    });

});