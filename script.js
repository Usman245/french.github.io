function changeContent() {
    // Get a reference to the element you want to change
    var contentElement = document.getElementById("content");

    // Change the content
    contentElement.innerHTML =` <div class="form2">
    <div class="range">
    <div class="one">1</div>
    <div class="line1">--------------------------------------------------</div>
    <div class="one">2</div>
    </div>
            <h3 class="question">Quelle est votre degré de motivation pour perdre du poids ?</h3>
            <p><input type="radio" name="option" value="peu"/> Peu</p>
            <p><input type="radio" name="option" value=""/> Moyen</p>
            <p><input value="" name="option" type="radio"/> Beaucoup </p>
            <h3 class="question">Faîtes-vous du sport actuellement?</h3>
<p><input type="radio" value="jamais" name="option2">jamais</p>
<p><input type="radio" name="option2" value="souvent" >souvent</p>
<p><input type="radio" name="option2" value="rarement">rarement</p>
<div class="btn">
<button onclick="retour()" class="btn1">Retour</button>
<button class="btn">Créez des prévisions!</button>
  </div>
   </div>`
  }

  function retour(){
    var contentElement = document.getElementById("content");

    // Change the content
    contentElement.innerHTML=`
    <form id="content" onsubmit="changeContent()">
                    <div class="range">
                        <div class="one">1</div>
                        <div class="line">--------------------------------------------------</div>
                        <div class="two">2</div>
                    </div>
                    <div class="radio">

                        <input style="margin-left:10px" type="radio" name="gender" value="homme"> Homme

                        <input type="radio" name="gender" value="femme"> Femme

                    </div>
                    <div style="margin-top: 30px;margin-left:15px">
                        <div class="weight">
                            <div class="weight1">
                                <p>Poids</p>
                                <p> <input class="input2" type="number" required placeholder="kg"></p>
                            </div>
                            <div class="weight2">
                                <p>Objectif de poids</p>
                                <input class="input2" type="number" required laceholder="kg">
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 30px;margin-left:15px">
                        <p>
                        <h3>Taille</h3>
                        </p>
                        <p><input class="input1" type="text" required placeholder="CM" id=""></p>
                    </div>
                    <div style="margin-top: 30px;margin-left:15px">
                        <p>
                        <h3 style="margin-bottom: 10px;">Âge</h3>
                        </p>
                        <p class="option"><select>
                                <option value="Veuillez sélectionner l'âge">Veuillez sélectionner l'âge</option>
                                <option value="Moins de 30 ans">Moins de 30 ans</option>
                                <option value="De 30 à 40 ans">De 30 à 40 ans</option>
                                <option value="40 à 50 ans">40 à 50 ans</option>
                                <option value="50 à 60 ans">50 à 60 ans</option>
                            </select></p>
                    </div>
                    <div class="btndiv">
                        <button type="submit" class="btn">Suvait</button>
                    </div>
                </form>
    `
  }