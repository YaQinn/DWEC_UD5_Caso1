//Atributos
n="0"; //guardar número
xi=1; //iniciar número: 1=si; 0=no;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" = sin operación guardada.

function load()
{
  pantalla=document.getElementById("valor");
}

//Guarda el número
function guardarNumero(nn)
{
  if (n=="0"||xi==1)
  {
    //mostrar número en pantalla y guardar
    pantalla.value=nn;
    n=nn;
  }
  else
  {
    //añadimos número al ya mostrado, mostramos y guardamos
    pantalla.value+=nn;
    n+=nn;
  }
  //el número está iniciado, podemos ampliarlo.
  xi=0
}

//Guarda el operador
function operar(o)
{
  //No se puede acumular más de una operación
  if (op!="no")
  {
      error();
  }
  else
  {
    //Ponemos el primer num a espera para poder guardar el segundo y guardamos la operación
    ni=n
    op=o;
    xi=1;
  }
}

//Resuelve la operación
function resolver()
{
  //Si no hay operador no se puede resolver
  if (op=="no")
  {
    error();
  }
  else
  {
    //Formamos una cadena con la operación
     sl=ni+op+n;
     //Resolvemos
     res=eval(sl)
     //mostramos la solución y la guardamos por si queremos reutilizarla
     pantalla.value=res
     n=res;

     //reseteamos operación
     op="no";
     xi=1;
  }
}
//Muestra error en pantalla y resetea
function error()
{
  pantalla.value="ERROR";
  xi=1;
  n="0";
  op="no";
}

window.onload = load;
