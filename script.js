document .addEventListener("DOMContentLoaded", function () {
    const downloadfile = document.getElementById
    (Download);

    downloadfile.addEventListener("click",function( ){
        const cvPath = "100_most_influential.pdf" ;

        const link = document.createElement ("a");
        link.href = cvPath;

        link.download = "cv_saya.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    );
}
);