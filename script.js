document.getElementById('proteinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let weight = document.getElementById('weight').value;
    if (weight) {
        let proteinNeed = weight * 2; // Bu, ortalama bir protein ehtiyacıdır (2 q/kq).
        document.getElementById('result').innerHTML = `Gündəlik protein ehtiyacınız: <strong>${proteinNeed} q</strong>`;
    } else {
        document.getElementById('result').innerHTML = 'Zəhmət olmasa çəkini daxil edin!';
    }
});
