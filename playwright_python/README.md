# Playwright con Python

Crear entorno virtual 
``` 
python -m venv venv
``` 

1. Activar el entorno virtual en Windows 
``` 
env\Scripts\Activate.ps1
``` 

2. Desactivar el entorno virtual en Windows (Opcional)
``` 
deactivate
``` 


3. Instalaciones minimas 
``` 
pip install pytest-playwright
playwright install
``` 

4. Ejecutar todos los Test Cases 
``` 
pytest
```

5. Ejecutar todos los test cases con verbose - informacion legible de pruebas que PASSED y FAILED

``` 
pytest -v 
```

6. Ejecutar todos los test cases e Interrumpe prueba si falla uno test case se detiene todas las pruebas alli

``` 
pytest -x 
```

7. Ejecutar en modo rapida los casos de prueba y abre el navegador

``` 
pytest --headed 
```

8. Ejecutar por nombre del test case 


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


