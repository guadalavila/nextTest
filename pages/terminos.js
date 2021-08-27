import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import TagManager from "react-gtm-module";

export default function TerminosYCondiciones() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Términos y condiciones términos y condiciones términos y condiciones",
        
          },
        })
      );
    } catch (err) {
      console.log("ReactNativeWebView not exist");
    }
  }, []);
  return (
    <>
      <div style={{margin:10}}>
        <p>
          <strong style={{color: "#605F5F"}}>
            TÉRMINOS Y CONDICIONES DE LA APLICACIÓN MÓVIL Y WEB "MI MOVISTAR"
          </strong>
        </p>
        <p style={{color: "#B5B3B2"}}>
          ¡BIENVENIDO! AL DESCARGAR Y/O USAR LA APLICACIÓN MÓVIL Y/O WEB "MI
          MOVISTAR" ("MI MOVISTAR"), CONFIRMAS QUE LEÍSTE Y ACEPTASTE ESTOS
          TÉRMINOS Y CONDICIONES ("T&amp;Cs") EN LOS QUE SE DETALLA LA
          INFORMACIÓN RELATIVA A TUS DERECHOS Y OBLIGACIONES COMO TITULAR Y/O
          USUARIO DE LOS SERVICIOS QUE POSEAS CONTRATADOS CON MOVISTAR Y
          GESTIONES A TRAVÉS DE MI MOVISTAR ("USUARIO").
        </p>
        <p>
          <strong>1. Aceptación y conocimiento de los T&amp;Cs</strong>
        </p>

        <p style={{color: "#B5B3B2"}}>
          1.1. Los presentes T&amp;Cs tienen carácter obligatorio y vinculante.
          Se aplican a todas las actividades realizadas a través y relacionadas
          con Mi Movistar, así como a todos los servicios provistos por
          Telefónica Móviles Argentina S.A. y Telefónica de Argentina S.A.
          (conjuntamente, denominadas como “Movistar”) a través de Mi Movistar.
          La descarga y/o uso de Mi Movistar implica el conocimiento y
          aceptación de estos T&amp;Cs. Si no estás de acuerdo con ellos,
          deberás abstenerse de descargarla y/o de utilizarla. Se deja
          constancia de que los presente T&amp;Cs resultan complementarios a los
          términos y condiciones de uso de los servicios que tengas contratados
          con Movistar y gestiones a través de Mi Movistar.
        </p>

        <p style={{color: "#B5B3B2"}}>
          1.2. Estos T&amp;Cs, los del Servicio de Comunicaciones Móviles de
          Movistar, los del Servicio Básico Telefónico, Servicio de Internet
          para el Hogar, Servicio de TV y servicio "Mobile Connect" para la
          identificación en servicios y aplicaciones online disponibles{" "}
          <a href="https://ar.mobileconnect.telefonica.com/ar/userportal/termsAndConditions">
            aquí
          </a>
          , así como aquellos otros aplicables a servicios integrados en Mi
          Movistar, se encuentran publicados y pueden consultarse en{" "}
          <a href="http://movistar.com.ar">http://movistar.com.ar</a>. Los
          T&amp;Cs de los servicios que el Usuario pueda gestionar a través de
          Mi Movistar prevalecerán y serán de aplicación en los casos que estos
          T&amp;Cs, y/o cualesquiera otros, presenten cualquier vacío o
          contradicción.
        </p>

        <p>
          <strong>2. Alta como usuario y uso de Mi Movistar</strong>
        </p>
        <p style={{color: "#B5B3B2"}}>
          2.1. Sólo podrás ser Usuario, y registrarte en Mi Movistar, si
          previamente sos el usuario de una línea del Servicio de Comunicaciones
          Móviles ("SCM") de Movistar para Individuos y/o de una línea del
          Servicio Básico Telefónico (“SBT”), en calidad de Titular o de
          Autorizado por dicho Titular, y contás con la capacidad legal
          suficiente para leer, comprender y aceptar estos T&amp;Cs. No podrán
          ser Usuarios: las personas que hayan sido suspendidas y/o
          inhabilitadas, los usuarios de líneas de los segmentos Negocios y
          Empresas de Movistar, así como, tampoco, los menores de edad. Los
          padres, tutores y/o los responsables de los menores de edad o
          incapaces que utilicen Mi Movistar serán responsables por dicho uso,
          incluyendo cualquier cargo, facturación y/o daño que se derive del
          mismo.
        </p>

        <p style={{color: "#B5B3B2"}}>
          2.2. En caso de que reúnas los requisitos para ser Usuario, el acceso
          a Mi Movistar requiere que te identifiques previamente a través de las
          siguientes opciones: (i) el servicio denominado Mobile Connect, con el
          objetivo de validar el número de teléfono y vincular dicha línea a tu
          cuenta en Mi Movistar, confirmar que la estás utilizando con ese
          número y poder permitirte el acceso y/o uso de los distintos servicios
          y funcionalidades de Mi Movistar, y (ii) registrándote con usuario y
          contraseña. En caso de no contar con estos últimos, deberás crear los
          mismos siguiendo los pasos indicados en la App o web. Dichos accesos
          no tienen costo alguno para el Usuario.
        </p>

        <p style={{color: "#B5B3B2"}}>
          2.3. Para tramitar su alta y/o utilizar determinados servicios o
          funcionalidades, podremos solicitarte información adicional. Asimismo,
          podrás dar voluntariamente a Movistar más información para completar
          tu cuenta y/o utilizar determinados servicios o funcionalidades. Esta
          información estará disponible y podrá ser modificada directamente a
          través de Mi Movistar.
        </p>

        <p style={{color: "#B5B3B2"}}>
          2.4. Si sos usuario de varias líneas de Movistar, podrás añadir y
          vincular las cuentas de esas líneas en Mi Movistar para facilitarte el
          acceso a las mismas, todo ello a través de Mobile Connect o a través
          de tu usuario y contraseña, según corresponda. Las líneas añadidas
          estarán asociadas al dispositivo desde el cual las asociaste y podrás
          desvincularlas siempre que lo desees.
        </p>

        <p style={{color: "#B5B3B2"}}>
          2.5. También tendrás la posibilidad de sincronizar tu agenda de
          contactos de tu dispositivo con el objetivo de tenerlos siempre
          disponibles en Mi Movistar y facilitarte el uso de nuestros servicios.
          Mediante dicha sincronización, Movistar comprobará si las personas que
          figuran en tu agenda y/o en dicho historial están ya utilizando Mi
          Movistar, en cuyo caso pasarán a formar parte de su red de contactos.
        </p>

        <p style={{color: "#B5B3B2"}}>

          2.6. Movistar podrá establecer o requerir validaciones de seguridad
          adicionales para acceder a determinadas opciones y/o funcionalidades
          de Mi Movistar. Asimismo, Movistar no se responsabilizará por la
          pérdida, sustracción y/o uso no autorizado por terceros de la tarjeta
          SIM de tu/s línea/s móvil/es vinculada/s, por lo que no deberás
          compartirla. De igual manera, no deberás dejar abierto ningún
          dispositivo en el que estés registrado, y al que un tercero pueda
          acceder sin tu consentimiento. Movistar no se responsabiliza por el
          uso que terceros puedan hacer de Mi Movistar en tu dispositivo.
        </p>

        <p>
          <strong>3. Objeto y funcionalidades de Mi Movistar</strong>
        </p>

        <p style={{color: "#B5B3B2"}}>

          3.1. A través de Mi Movistar podrás disfrutar de servicios y
          funcionalidades de soporte y autogestión de tu/s línea/s de Movistar
          vinculada/s. Ello así, siempre que hayas dado tu consentimiento en
          caso de ser necesario y dispongas de un terminal o dispositivo
          compatible con dichos servicios y con acceso a Internet.
        </p>

        <p style={{color: "#B5B3B2"}}>

          3.2. Los servicios complementarios e innovadores disponibles en Mi
          Movistar, a los que podrás acceder de manera online, serán, entre
          otros, los siguientes, en función de los concretos servicios que se
          encuentren disponibles en cada momento, como por ejemplo: información
          y autogestión online de la/s línea/s móvil/es y fija/s vinculadas,
          incluyendo control de consumo e información de facturación,
          realización de recargas y activaciones de planes, servicios o
          paquetes, acceso a determinados servicios ofrecidos por Movistar sobre
          la/s línea/s móvil/es o fija/s vinculada/s, realizar la activación del
          servicio Movistar Play, solicitar un cambio de chip, contratar una
          línea móvil adicional, así como también la atención al cliente vía
          chat e información de ayuda, entre otros. Todos los servicios antes
          mencionados podrán estar sujetos a sus respectivas condiciones
          específicas, y/o estar sólo disponibles para determinadas plataformas
          tecnológicas, grupos y/o segmentos de Usuarios.
        </p>

        <p style={{color: "#B5B3B2"}}>

          3.3. La app móvil Mi Movistar sólo podrá descargarse en la República
          de Argentina, desde las tiendas virtuales oficiales según el sistema
          operativo del dispositivo compatible en el cual se intenta instalar.
          Movistar no tiene obligación de actualizar Mi Movistar, la cual es
          provista en las condiciones que se encuentre disponible, para su uso o
          descarga en cada momento. Movistar tampoco se responsabiliza por la
          actualización de Mi Movistar y/o del software que usted deba realizar
          en sus dispositivos para mantener la compatibilidad con Mi Movistar,
          la cual queda bajo tu responsabilidad. Además, tené en cuenta que
          puede haber ciertas aplicaciones o servicios que sean incompatibles
          con Mi Movistar, por lo que podrían no funcionar, o funcionar de un
          modo distinto, en caso de que te registres como Usuario.
        </p>

        <p>
          <strong>4. Atención al cliente vía Aura</strong>
        </p>

        <p style={{color: "#B5B3B2"}}>

          4.1. Los Usuarios podrán ponerse en contacto con el servicio de
          atención al cliente de Movistar a través de Aura, que es un servicio
          de inteligencia cognitiva de Movistar, con el cual el Usuario podrá
          interactuar para resolver dudas sobre los servicios que tiene
          contratado con Movistar. Podes preguntarle sobre tus facturas, tu
          consumo, ver qué servicios tenes contratados, consultar tu saldo,
          realizar una recarga y consultar tus movimientos. También, Aura podrá
          pensar en vos y sugerirte mejoras sobre los servicios que tenes
          contratados.
        </p>

        <p style={{color: "#B5B3B2"}}>

          Determinadas características de Aura podrían verse limitadas, no estar
          disponibles o estar disponibles de un modo distinto en Mi Movistar,
          incluyendo el horario de atención, la posibilidad de interponer quejas
          o reclamaciones, y/o el ofrecimiento de atención exclusiva o
          personalizada.
        </p>

        <p style={{color: "#B5B3B2"}}>

          4.2. Al identificarte mediante tu número de teléfono, podrás
          interactuar con AURA y realizar consultas sobre los servicios que te
          ofrece Movistar. Para ello, aceptas que AURA pueda tratar tu
          conversación y acceder a la información que le solicitas.
        </p>

        <p style={{color: "#B5B3B2"}}>

          4.3. AURA cumple la normativa vigente aplicable de datos personales, y
          solo tratará los datos necesarios para darte la información que nos
          solicitas y lo hará de conformidad con las Políticas de Privacidad de
          Telefónica. En concreto, si estás interesado en conocer como tratamos
          tus datos o como darte de baja del servicio, consulta la Política de
          Privacidad de Mi Movistar que encontraras en el punto 9 de estos
          T&amp;C. Todo ello para que te sientas seguro al interactuar con ella.
        </p>

        <p style={{color: "#B5B3B2"}}>

          4.4. Aura tiene implementados mecanismos y herramientas de
          inteligencia artificial con el objetivo de dar respuestas
          automatizadas a las consultas planteadas por el Usuario y/o atender
          las peticiones realizadas por éste vía Aura. Por ello, las respuestas
          de Aura podrían no ser totalmente coherentes, precisas o correctas.
        </p>

        <p style={{color: "#B5B3B2"}}>
          No obstante lo expuesto, podrás oponerse en cualquier momento a la
          recepción de este tipo de comunicaciones comerciales por email, SMS, o
          similar, procedentes de Movistar o de las empresas del Grupo
          Telefónica, solicitando el retiro o bloqueo, total o parcial de tu
          nombre de los bancos de datos a los que se refiere el art. 27 inc. 3
          de la Ley 25.326, conforme te explicamos en el punto 9.8 de estos
          T&amp;C. Adicionalmente, podrás inscribirte en cualquier momento en el
          Registro Nacional "No llame", a los efectos de manifestar tu voluntad
          de no ser contactado por quien publicite, oferte, venda o regale
          bienes o servicios. No obstante, para oponerse a recibir estas
          comunicaciones a través de Mi Movistar deberás hacerlo específicamente
          a través de la opción{" "}
          <a href="http://web.movistar.com.ar/profile">disponible aquí</a>.
        </p>

        <p style={{color: "#B5B3B2"}}>
          9.5.3. Por otro lado, en caso de que los datos sean requeridos por la
          vía legal, administrativa o judicial correspondiente, Movistar se verá
          compelida a revelar los mismos a la autoridad solicitante. En
          cualquier caso, Movistar siempre garantizará el mantenimiento de la
          confidencialidad y tratamiento seguro de la información en el marco de
          dicha transferencia.
        </p>

        <p>9.6. Servicios con cargo:</p>

        <p style={{color: "#B5B3B2"}}>
          9.6.1. Para la contratación de nuestros servicios con cargo, Movistar
          te podrá solicitar determinada información adicional cuando sea
          necesario. Dichos datos pasarán a formar parte de nuestros ficheros y
          serán tratados de forma confidencial con la finalidad de tramitar y/o
          gestionar dicha contratación, la prestación de los servicios
          contratados y su facturación.
        </p>

        <p style={{color: "#B5B3B2"}}>
          9.6.2. En aquellos servicios que impliquen una obligación de pago para
          el titular, autorizas a Movistar para que pueda analizar tu solvencia
          económica mediante el tratamiento de los datos que hubieses aportado,
          con el objetivo de garantizar su cumplimiento, así como para confirmar
          y valorar tu solvencia financiera.
        </p>

        <p>© MOVISTAR, 2019. Todos los derechos reservados.</p>
      </div>
    </>
  );
}

{
  /* 

    </div>
    </>
  );
} */
}
