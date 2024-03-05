const btnVerwijderKlant = document.querySelector("#syntra-delete-klant");

function handleVerwijderKlant(event)
{
    // hide all alerts
    console.log("Verwijder klant");
    const regInfoKlant = document.querySelector("#syntra-klant-content");
    
    if (Math.random() >= 0.5)
    {
        // hier gaat het goed
        regInfoKlant.style.display = "none";
        document.querySelector("#syntra-succes").style.display = "block";
        document.querySelector("#syntra-fail").style.display = "none";
    }
    else
    {
        // hier loopt het mis
        document.querySelector("#syntra-fail").style.display = "block";
    }

}

btnVerwijderKlant.addEventListener("click", handleVerwijderKlant);

// document.querySelector("#syntra-delete-klant").addEventListener("click", function(event) 
// {

// })