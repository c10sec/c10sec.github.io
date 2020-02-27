# XSS-mania
Web en español de retos sobre XSS (Cross Site Scripting)

# Propósito de los retos
Estos retos han sido diseñados para aprender y entender como funcionan las vulnerabilidades XSS, así como desarrollar recursos que te permitan evadir muchos de los filtros presentes en la mayoría de las webs vulnerables a XSS.
Aunque los retos de categoría "Fácil" estan orientados a aquellos que están comenzando con la vulnerabilidad, las categorías "Medio" y "Dificil" están pensadas para poner a prueba los conocimientos de aquellos que controlan un poquito más del tema.

# ¿Como jugar?
Cada reto tiene un código Javascript (podrás encontrarlo entre las etiquetas <script>) que hace que la página sea vulnerable.
El objetivo de cada nivel es conseguir hacer un alert(101) sin necesidad de ninguna interaccón de usuario, es decir: que el script se ejecute de forma automática nada más acceder a la web. Para esto, tendrás que localizar el parametro que acepta la URL (el cual es visible en el código de la web) e inyectar ahí tu payload. Ej: www.example.com?parametro=payloadmalicioso 
Para solucionar los retos está prohibido usar cualquier tipo de herramienta que automatice o identifique las vulnerabilidades en el código.
Tambien está prohibido hacer spoiler de las soluciones, si necesitas ayuda puedes consultar las pistas que hay disponibles en algunos niveles (solo en los de categoría "Fácil") o contactar conmigo, que para algo soy el que ha diseñado estos retos.
TW: @c10sec (https://twitter.com/c10sec)
  
Para acceder directamente a los retos deber ir a: https://c10sec.github.io/

Para reportar cualquier fallo o sugerir un reto nuevo puedes contactarme por Twitter: https://twitter.com/c10sec
