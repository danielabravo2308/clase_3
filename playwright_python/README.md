# Playwright con Python

Crear entorno virtual 
``` 
python -m venv venv
``` 

Activar el entorno virtual en Windows 
``` 
venv\Scripts\Activate.ps1
``` 


Instalaciones minimas 
``` 
pip install pytest-playwright
playwright install
``` 

Ejecutar Test Cases 
``` 
pytest
pytest -v 
pytest -x 
pytest --headed 

```

Generar reportes de ejecucion de test cases con HTML <br>
``` 
pip install pytest-html
pytest --html=pytest_report.html
``` 

Generar reportes de ejecucion de test cases con Allure Windows <br>
``` 
pip install allure-pytest
npm install -g allure-commandline --save-dev
python -m pytest --alluredir allure-results
allure serve allure-results
``` 


