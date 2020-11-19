import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import TagManager from "react-gtm-module";

export default function TerminosYCondiciones() {
  useEffect(() => {
    try {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "NavigationBar",
          data: {
            title: "Términos y condiciones",
          },
        })
      );
    } catch (err) {
      console.log("ReactNativeWebView not exist");
    }
  }, []);
  return (
    <>
      <div>
        <p>
          <strong>
            TÉRMINOS Y CONDICIONES DE LA APLICACIÓN MÓVIL Y WEB "MI MOVISTAR"
          </strong>
        </p>
        <p>
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

        <p>
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

        <p>
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
        <p>
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

        <p>
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

        <p>
          2.3. Para tramitar su alta y/o utilizar determinados servicios o
          funcionalidades, podremos solicitarte información adicional. Asimismo,
          podrás dar voluntariamente a Movistar más información para completar
          tu cuenta y/o utilizar determinados servicios o funcionalidades. Esta
          información estará disponible y podrá ser modificada directamente a
          través de Mi Movistar.
        </p>

        <p>
          2.4. Si sos usuario de varias líneas de Movistar, podrás añadir y
          vincular las cuentas de esas líneas en Mi Movistar para facilitarte el
          acceso a las mismas, todo ello a través de Mobile Connect o a través
          de tu usuario y contraseña, según corresponda. Las líneas añadidas
          estarán asociadas al dispositivo desde el cual las asociaste y podrás
          desvincularlas siempre que lo desees.
        </p>

        <p>
          2.5. También tendrás la posibilidad de sincronizar tu agenda de
          contactos de tu dispositivo con el objetivo de tenerlos siempre
          disponibles en Mi Movistar y facilitarte el uso de nuestros servicios.
          Mediante dicha sincronización, Movistar comprobará si las personas que
          figuran en tu agenda y/o en dicho historial están ya utilizando Mi
          Movistar, en cuyo caso pasarán a formar parte de su red de contactos.
        </p>

        <p>
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

        <p>
          3.1. A través de Mi Movistar podrás disfrutar de servicios y
          funcionalidades de soporte y autogestión de tu/s línea/s de Movistar
          vinculada/s. Ello así, siempre que hayas dado tu consentimiento en
          caso de ser necesario y dispongas de un terminal o dispositivo
          compatible con dichos servicios y con acceso a Internet.
        </p>

        <p>
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

        <p>
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

        <p>
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

        <p>
          Determinadas características de Aura podrían verse limitadas, no estar
          disponibles o estar disponibles de un modo distinto en Mi Movistar,
          incluyendo el horario de atención, la posibilidad de interponer quejas
          o reclamaciones, y/o el ofrecimiento de atención exclusiva o
          personalizada.
        </p>

        <p>
          4.2. Al identificarte mediante tu número de teléfono, podrás
          interactuar con AURA y realizar consultas sobre los servicios que te
          ofrece Movistar. Para ello, aceptas que AURA pueda tratar tu
          conversación y acceder a la información que le solicitas.
        </p>

        <p>
          4.3. AURA cumple la normativa vigente aplicable de datos personales, y
          solo tratará los datos necesarios para darte la información que nos
          solicitas y lo hará de conformidad con las Políticas de Privacidad de
          Telefónica. En concreto, si estás interesado en conocer como tratamos
          tus datos o como darte de baja del servicio, consulta la Política de
          Privacidad de Mi Movistar que encontraras en el punto 9 de estos
          T&amp;C. Todo ello para que te sientas seguro al interactuar con ella.
        </p>

        <p>
          4.4. Aura tiene implementados mecanismos y herramientas de
          inteligencia artificial con el objetivo de dar respuestas
          automatizadas a las consultas planteadas por el Usuario y/o atender
          las peticiones realizadas por éste vía Aura. Por ello, las respuestas
          de Aura podrían no ser totalmente coherentes, precisas o correctas.
        </p>

        <p>
          4.5. Aura es un producto de Movistar y la empresa responsable de
          tratar tus datos para prestar el servicio será Telefónica Móviles
          Argentina S.A. o Telefónica de Argentina S.A., según corresponda,
          teniendo en cuenta los servicios que poseas contratados con Movistar.
        </p>

        <p>
          Aura utiliza los Servicios Cognitivos de Microsoft y un conjunto de
          servicios web que permiten conexiones inteligentes utilizando los
          canales de conversación que usas al interactuar con Aura. Como
          proveedor de servicios a Movistar, Microsoft participará en la
          transmisión de la información que el cliente proporcione a Aura y la
          información que Aura generará como respuesta. Para obtener más
          información acerca de las políticas de privacidad de Microsoft,
          consulta su declaración de privacidad{" "}
          <a href="https://privacy.microsoft.com/es-es/privacystatement">
            aquí
          </a>
          .
        </p>

        <p>
          4.6. Por todo lo anterior, estos canales deberán ser utilizados por el
          Usuario de una forma complementaria y accesoria al resto de canales de
          atención al cliente de Movistar que tiene a su disposición. Además,
          las respuestas ofrecidas a través de este servicio sólo serán
          relativas a la línea vinculada a la cuenta del Usuario desde la que se
          realiza la consulta, y estas podrán verse limitadas en función de
          criterios como, por ejemplo, la condición del Usuario como Titular o
          Autorizado de dicha línea. Por lo tanto, te recomendamos no
          proporcionar datos y/o información sensible a través de estos canales.
        </p>

        <p>
          <strong>5. Información y herramientas autogestión</strong>
        </p>

        <p>
          5.1. A través de Mi Movistar y/o Aura, los Usuarios podrán acceder a
          distintas opciones de visualización de información y de gestión sobre
          su/s línea/s móvil/es o fija/s y servicios de Movistar habilitados
          para ser gestionados a través de Mi Movistar. Dichas opciones podrán
          incluir, por ejemplo, la realización de trámites comerciales, la
          posibilidad de visualizar, compartir, descargar y/o pagar facturas,
          realizar recargas y pagos con tarjeta de crédito, activar paquetes y
          extras, consultar consumos y movimientos, monto a pagar, saldo, así
          como el historial de actividad.. Recordá que sos responsable de los
          envíos y las facturas que decidas compartir con terceros a través de
          Mi Movistar.
        </p>

        <p>
          5.2. Asimismo, podrás acceder a determinados servicios de Movistar
          integrados dentro de Mi Movistar, entre los que podrán incluirse, por
          ejemplo, la gestión o activación de servicios sobre la línea,
          visualización de información sobre cobertura, navegación, lugares y
          medios de pago georeferenciados, recomendación de planes acordes a tu
          consumo (test drive), y/o configuración del terminal, entre otros.
        </p>

        <p>
          5.3. Independientemente de la información presentada y/o los servicios
          accesibles, resultarán aplicables los precios, bonos o, en su caso,
          otras condiciones económicas, que hubieras contratado, de acuerdo con
          los precios, condiciones comerciales y demás términos condiciones que
          le sean aplicables a tu/s línea/s de Movistar vinculada/s.
        </p>

        <p>
          5.4. Movistar no se compromete a poner a disposición a través de Mi
          Movistar y/o de Aura, la totalidad de la información, funcionalidades
          de gestión y/o servicios disponibles sobre las líneas de Movistar.
          Además, esta información o determinadas opciones podrán encontrarse
          disponibles sólo para determinados Usuarios y/o durante tiempo
          limitado, estar limitadas y/o no estar actualizadas de forma
          instantánea o en tiempo real.
        </p>

        <p>
          <strong>
            6. Condiciones legales de compras y pagos electrónicos a través de
            Mi Movistar
          </strong>
        </p>

        <p>
          6.1. En caso de pertenecer al segmento de Usuarios con acceso a esta
          funcionalidad a través de Mi Movistar, podrás contratar y/o proceder
          al pago de las facturas de determinados productos y servicios de
          Movistar. Dicha contratación se llevará a cabo directamente entre el
          Usuario y Movistar, rigiéndose la misma por estos T&amp;Cs, así como
          por lo dispuesto en cualesquiera otros adicionales que se pudieren
          establecer al efecto.
        </p>

        <p>
          6.2. Por ello, antes de proceder a la contratación de nuestros
          productos y/o servicios, recordá comprobar tus condiciones
          específicas, precios, impuestos, formas de pago, terminales
          compatibles, así como las características asociadas. Estos pueden no
          encontrarse en stock y/o estar sujetos a disponibilidad técnica,
          comercial o geográfica.
        </p>

        <p>
          6.3. Recordá que, a estos efectos, serán de aplicación los precios,
          bonos y/o, en su caso, otras condiciones económicas contratadas de
          acuerdo con los precios y demás condiciones generales y/o
          particulares, ofertas o promociones en vigor en el momento de su
          utilización. En este sentido, Movistar se reserva el derecho de
          modificar los precios de los productos y/o servicios en cualquier
          momento. En caso de realizarse un cambio, si continuás utilizando y/o
          adquiriendo los servicios una vez comunicado el mismo, entendemos que
          los aceptaste. Por último, ponemos de manifiesto que el precio de los
          productos y/o servicios que se ofrecen en Mi Movistar puede no
          coincidir con el de los distintos locales comerciales y/o canales de
          venta o distribución de Movistar.
        </p>

        <p>
          6.4. Salvo que Movistar hubiere habilitado una opción al efecto,
          finalizada la contratación no podrás reclamar la devolución o
          reembolso de la cantidad abonada. En lo que respecta a la forma de
          pago on-line y salvo que se indicase otra cosa, ésta será mediante
          cualquiera de las tarjetas bancarias aceptadas por Movistar, que hayan
          sido emitidas en la República Argentina, a través de una pasarela de
          pago segura (TPV virtual). Una vez verificado el pago, se pondrá a tu
          disposición la confirmación de la contratación donde se incluirá el
          detalle de los servicios contratados y las condiciones de los mismos.
        </p>

        <p>
          6.5. En su caso, a través de tu cuenta en Mi Movistar también podrás
          acceder al servicio de pago de las facturas de los servicios que
          ofrece Movistar (las "Facturas") y, a tal efecto, se entenderá que
          todo pago realizado de este modo fue realizado por el Usuario.
        </p>

        <p>
          6.6. En tal caso, el banco podrá considerar que tal instrucción ha
          emanado válida, legítima y auténticamente del Usuario sin necesidad de
          efectuar, realizar o tomar ningún otro resguardo de ninguna índole,
          renunciando expresamente a oponer defensa alguna basada en defecto de
          acreditación de la existencia de la operación, asumiendo como esencial
          del contrato toda consecuencia del uso del sistema en tu nombre.
        </p>

        <p>
          6.7. Para que Movistar y el banco puedan cumplir con las instrucciones
          de pago impartidas, deberás contar con los fondos suficientes para
          ello en tus cuentas y/o tarjetas de crédito. También podrán diferirse,
          en caso de inconvenientes técnicos u operativos.
        </p>

        <p>
          6.8. Aceptando el uso de este servicio, autorizas al banco y a
          Movistar para que transmitan información sobre tus cuentas, tarjetas u
          otro producto que tuvieras con Movistar vía Internet o Red Privada de
          datos autorizada por el banco y realices las transacciones
          especificadas sobre tus cuentas, tarjetas, operaciones y otros
          servicios que implemente Movistar, a través de Mi Movistar y bajo
          estos T&amp;Cs que declarás conocer y aceptar.
        </p>

        <p>
          6.9. El Usuario acepta la prueba de la existencia de las órdenes
          cursadas que surjan de los elementos que componen el sistema
          informático y así también toda prueba que sea hábil para acreditar la
          orden emanada. A este efecto, facultas a Movistar a utilizar cualquier
          sistema idóneo para acreditar la pertenencia de la orden cursada y
          renuncias expresamente a cuestionar la idoneidad o habilidad de esa
          prueba, considerándose la presente como condición esencial de ingreso
          al sistema.
        </p>

        <p>
          <strong>7. Consumo de datos, tarificación y navegación</strong>
        </p>

        <p>
          7.1. Con carácter general, la utilización de Mi Movistar a través del
          SCM de Movistar será gratuita para el Usuario y no consumirá datos del
          plan asociado a tu línea siempre que lo hagas dentro del territorio
          nacional de la República de Argentina. No obstante, quedan excluidos
          el acceso a Internet/tráfico de datos en roaming; el consumo de datos
          derivado de la descarga de Mi Movistar; así como el acceso y
          visualización de videos u otros contenidos audiovisuales y/o cualquier
          otro servicio y/o dominio externo a Mi Movistar. En todos estos casos,
          se facturará o descontará del plan asociado a tu línea, el precio,
          según corresponda, por el uso de dichos datos, de conformidad con lo
          previsto en su plan de servicios contratado.
        </p>

        <p>
          7.2. Movistar se reserva el derecho a retirar este beneficio en
          cualquier momento, notificándolo previamente a los Usuarios afectados,
          así como a establecer políticas de uso razonable sobre el mismo de
          conformidad con la Cláusula 10 de estos T&amp;Cs.
        </p>

        <p>
          7.3. En tanto que Mi Movistar podrá operar a través de Wifi, y/o la
          red de terceros proveedores ajenos a Movistar, podrías tener que
          afrontar costos adicionales por tal servicio que deberás consultar con
          su proveedor. Además, en caso de que utilice Mi Movistar mediante SCM
          en el exterior de la República Argentina, Movistar te facturará o
          descontará los datos según los precios vigentes en roaming.
        </p>

        <p>
          <strong>8. Prohibiciones</strong>
        </p>
        <p>8.1 Está prohibido utilizar Mi Movistar para:</p>

        <p>
          8.1.1. Conectarla o de cualquier forma vincularla a programas
          informáticos que constituyan, promuevan o den acceso a actividades de
          espionaje, piratería o cualquier otro programa o código que de
          cualquier manera atente contra la integridad de los servicios y
          sistemas de Movistar y su seguridad informática.
        </p>

        <p>
          8.1.2. Fines ilegales, fraudulentos o de cualquier modo vinculado a
          actos delictivos.
        </p>

        <p>
          8.1.3. Enviar spam o mensajes no solicitados, enviar, recibir, subir,
          bajar o usar cualquier tipo de material o contenido ilegal, ofensivo,
          abusivo, malicioso, amenazante, indecente, difamatorio, obsceno,
          racista, o que resulte de cualquier manera discriminatorio u
          objetable.
        </p>

        <p>
          8.1.4. Acosar, perseguir, hostigar, atormentar o de cualquier modo
          molestar a una persona, calumniar, injuriar, suplantar o hacerse pasar
          por otra persona.
        </p>

        <p>
          8.1.5. De cualquier manera, ser utilizada como herramienta de control
          empresarial o parental, así como para espiar y/o vulnerar el secreto a
          las comunicaciones de terceros.
        </p>

        <p>
          8.1.6. De cualquier manera, infringir derechos de autor, marcario, de
          confidencialidad, privacidad o propiedad intelectual de Movistar o de
          terceros para realizar o alentar el envío de publicidad, promociones,
          mensajes o comunicaciones masivas no deseadas.
        </p>

        <p>
          8.2. El uso de Mi Movistar para cualquiera de los fines detallados
          precedentemente y, en general, para un fin distinto de aquel para el
          cual ha sido habilitada, y/o contrario a estos T&amp;Cs, implicará el
          bloqueo, temporal o permanente, o la baja de Mi Movistar, según sea el
          caso, y/o la terminación del servicio asociado a la misma. Ello así,
          sin perjuicio de cualquier acción o reclamo que pudiera corresponder a
          Movistar por el uso indebido de Mi Movistar o los servicios que
          presta. Asimismo, Mi Movistar podrá ser suspendida, limitada y/o
          cancelada en forma independiente de los servicios que posea
          contratados con Movistar.
        </p>

        <p>
          8.3. Específicamente, Movistar podrá limitar el uso o bloquear por
          completo Mi Movistar en caso de que lo uses de una manera indebida,
          abusiva o contraria al buen uso de los servicios de Movistar,
          incluyendo los casos en que dicho uso pudiere representar una amenaza
          para la seguridad o integridad de la red de comunicaciones o que, de
          cualquier otro modo, pudiere afectar el normal funcionamiento de tal
          red o derechos de terceros. Ello, a sólo criterio de Movistar y sin
          necesidad de preaviso.
        </p>

        <p>
          <strong>9. Política de Privacidad de Mi Movistar</strong>
        </p>

        <p>
          9.1. Aceptas que su información y datos personales serán tratados de
          acuerdo con lo estipulado por la Ley 25.326 de Datos Personales y/o
          las Políticas de Privacidad de Telefónica.
        </p>

        <p>
          9.2. En consonancia con la normativa vigente en materia de datos
          personales, queremos hacerte conocer las medidas a adoptar para
          garantizar la privacidad de la información que nos suministres a
          través de Mi Movistar (la "Información"), las cuales detallamos a
          continuación:
        </p>

        <p>
          9.2.1. Proteger la Información de acuerdo con los estándares de
          seguridad y confidencialidad.
        </p>

        <p>
          9.2.2. Limitar la obtención y el uso de la Información al mínimo
          necesario para administrar y brindarte un servicio adecuado, lo que
          incluye asesorarlos sobre nuestros productos, servicios y demás
          oportunidades.
        </p>

        <p>
          9.2.3. Permitir el acceso a la Información únicamente a personas
          autorizadas por Movistar (sean dependientes o no), las que estarán
          debidamente capacitadas en el manejo apropiado de la misma y serán
          pasibles de sanciones en caso de incumplimiento.
        </p>

        <p>
          9.2.4. No revelar la Información (cuando legalmente se requiera
          consentimiento previo) a terceras personas, a menos que le hayamos
          informado previamente y nos hayas autorizado, o lo hagamos en virtud
          de una obligación legal.
        </p>

        <p>
          9.2.5. Exigir a aquellos que nos provean algún servicio que se adecuen
          a nuestros estándares de seguridad y confidencialidad.
        </p>

        <p>
          9.2.6. Mantener los archivos de nuestros clientes completos,
          actualizados y exactos, conforme a la Información que nos suministre
          el propio cliente. Indicar cómo y dónde acceder a los mismos
          (exceptuando cuando la ley lo prohíba) y cómo notificarnos de posibles
          errores que corregiremos a la brevedad.
        </p>

        <p>
          9.2.7. Ofrecerle la posibilidad de ejercer los derechos de acceso,
          rectificación y supresión de sus datos, cuando corresponda.
        </p>

        <p>9.3. Información básica:</p>

        <p>
          9.3.1. Para poder utilizar Mi Movistar, los Usuarios deberán aportar
          ciertos datos identificativos y/o de contacto básicos sin los cuales
          se tornaría imposible brindar los servicios. Ahora bien, estos podrán
          dar voluntariamente más información para completar su cuenta en Mi
          Movistar y/o para utilizar determinados servicios o funcionalidades
          disponibles, como su foto, email o su ubicación.
        </p>

        <p>
          9.3.2. Los datos recabados por los formularios correspondientes y/o a
          través de Mi Movistar serán incorporados a una base de la cual es
          responsable Movistar, con la finalidad de poder permitirte el acceso y
          uso de los distintos servicios y funcionalidades que le ofrecemos.
        </p>

        <p>9.4. Edad Mínima y calidad de los datos:</p>

        <p>
          9.4.1. Para poder registrarse y utilizar Mi Movistar tendrás que ser
          mayor de edad. Por tanto, al darse de alta en Mi Movistar, nos
          garantizas que sos mayor de esa edad. Movistar podrá contactarte en
          cualquier momento y pedirte la documentación que sea necesaria para
          verificar que cumplís esta condición.
        </p>

        <p>
          9.4.2. En línea con lo anterior, tus datos personales, número/s de
          línea/s vinculada/s y demás información que nos facilite bien en el
          registro y/o uso de Mi Movistar deberá ser siempre real, veraz y estar
          actualizada. Además, Movistar pone a disposición de los Usuarios las
          herramientas y opciones necesarias para el control y actualización de
          su información personal. Por ello, mediante la entrega de sus datos
          personales a Movistar, garantizas y te responsabilizas, tanto frente a
          Movistar como frente a terceros, que tus datos son ciertos y te
          pertenecen.
        </p>

        <p>
          9.4.3. En todo caso, queda prohibido el suministro de datos falsos. En
          este sentido, Movistar podrá requerirte información adicional y/o
          cancelar tu cuenta por este motivo, sin previo aviso y sin que ello te
          dé derecho a compensación o indemnización alguna. Desde Movistar nos
          reservamos el derecho a verificar toda esta información en cualquier
          momento y, en su caso, a cancelar tu cuenta en Mi Movistar.
        </p>

        <p>9.5. Comunicaciones de datos y fines comerciales:</p>

        <p>
          9.5.1. Cuando te registras en Mi Movistar, proporcionas información
          básica personal que será visible por otros Usuarios registrados para
          que puedan identificarte y comunicarse con vos. No obstante, los datos
          que nos facilites no se cederán a otras personas o empresas sin tu
          consentimiento.
        </p>

        <p>
          Sin perjuicio de lo anterior, al aceptar estos T&amp;Cs, prestas tu
          expreso consentimiento para que tus datos personales, tales como
          nombre, apellido, DNI, domicilio, número de abonado, correo
          electrónico, entre otros, puedan ser transferidos a otras empresas del
          Grupo Telefónica, incluidas aquellas empresas situadas fuera del
          territorio de la República de Argentina, como por ejemplo Telefónica
          Digital España, S.L.U. (España) o Telefónica USA, Inc. (Estados
          Unidos), con el objeto de prestarte ciertos servicios de Mi Movistar y
          a los fines detallados en el punto siguiente.
        </p>

        <p>
          9.5.2. Autorizas a Movistar y a las empresas del Grupo Telefónica a:
          enviarte, a través de Mi Movistar, del correo electrónico, y/o
          mensajes cortos a tu línea, o los mecanismos que Movistar o las
          empresas del Grupo Telefónico dispongan, propuestas comerciales,
          facturas, encuestas, información y/o publicidad relacionada con sus
          servicios y/o productos realizar análisis de mercado y del uso que
          haga de Mi Movistar; hacer uso de tus datos con fines de atención al
          cliente y/o unificar tu cuenta en Mi Movistar, con las cuentas
          personales de este correspondientes a otras aplicaciones y/o sitios
          web de Movistar y/o de las restantes empresas del Grupo Telefónica.
        </p>

        <p>
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

        <p>
          9.5.3. Por otro lado, en caso de que los datos sean requeridos por la
          vía legal, administrativa o judicial correspondiente, Movistar se verá
          compelida a revelar los mismos a la autoridad solicitante. En
          cualquier caso, Movistar siempre garantizará el mantenimiento de la
          confidencialidad y tratamiento seguro de la información en el marco de
          dicha transferencia.
        </p>

        <p>9.6. Servicios con cargo:</p>

        <p>
          9.6.1. Para la contratación de nuestros servicios con cargo, Movistar
          te podrá solicitar determinada información adicional cuando sea
          necesario. Dichos datos pasarán a formar parte de nuestros ficheros y
          serán tratados de forma confidencial con la finalidad de tramitar y/o
          gestionar dicha contratación, la prestación de los servicios
          contratados y su facturación.
        </p>

        <p>
          9.6.2. En aquellos servicios que impliquen una obligación de pago para
          el titular, autorizas a Movistar para que pueda analizar tu solvencia
          económica mediante el tratamiento de los datos que hubieses aportado,
          con el objetivo de garantizar su cumplimiento, así como para confirmar
          y valorar tu solvencia financiera.
        </p>

        <p>9.7. Política de Cookies:</p>

        <p>
          Lo dispuesto en este apartado, resultan complementario a las Políticas
          de Cookies de Movistar, las que se encuentran publicadas en{" "}
          <a href="http://www.movistar.com.ar/legales/politicas-de-privacidad/politica-de-uso-de-cookies">
            http://www.movistar.com.ar/legales/politicas-de-privacidad/politica-de-uso-de-cookies
          </a>
          .
        </p>

        <p>
          9.7.1. Una cookie es un fichero que se descarga en su dispositivo al
          acceder a determinadas páginas web y/o aplicaciones. Las cookies
          permiten, entre otras cosas, almacenar y recuperar información sobre
          tu número de visitas, hábitos de navegación o de su dispositivo y,
          dependiendo de la información que contengan y de la forma en que se
          utilicen, pueden utilizarse para reconocerte como Usuario.
        </p>

        <p>
          9.7.2. Tené en cuenta que para poder utilizar Mi Movistar podría ser
          necesario que tengas habilitadas las cookies, especialmente aquellas
          de carácter técnico que resultan necesarias para que Movistar pueda
          identificarte como Usuario registrado cada vez que accedas a Mi
          Movistar, la cual utiliza, al menos, los siguientes tipos de cookies,
          las cuales son tratadas bien por Movistar directamente o por terceros
          colaboradores:
        </p>

        <p>
          9.7.2.1. Cookies técnicas: Son aquellas utilizadas por Movistar que
          permiten al Usuario la navegación y la utilización de las diferentes
          opciones o servicios que se ofrecen como, por ejemplo, controlar el
          tráfico y la comunicación de datos, identificar la sesión, acceder a
          partes de acceso restringido, realizar la solicitud de inscripción,
          utilizar elementos de seguridad durante la navegación o almacenar,
          difundir y/o compartir contenidos.
        </p>

        <p>
          9.7.2.2. Cookies de personalización: Son aquellas utilizadas por
          Movistar que te permiten acceder a Mi Movistar con algunas
          características de carácter general predefinidas en función de una
          serie de criterios en tu dispositivo como, por ejemplo, el idioma, la
          configuración regional desde donde accede, etc.
        </p>

        <p>
          90.7.2.3. Cookies de análisis: Son aquellas utilizadas por Movistar y
          por terceros colaboradores que permiten cuantificar el número de
          Usuarios y así realizar la medición y análisis estadísticos de la
          utilización y actividad que hacen los mismos, así como elaborar
          perfiles de navegación de éstos para poder introducir mejoras en Mi
          Movistar.
        </p>

        <p>
          9.7.2.4. Cookies publicitarias y de publicidad comportamental: Son
          aquellas utilizadas por Movistar y por nuestros colaboradores que
          gestionan los espacios que sirven publicidad de Movistar que permiten
          difundir publicidad adecuada y relevante, medir la efectividad de
          nuestras campañas online, así como adecuar el contenido de los
          anuncios al perfil de navegación de cada Usuario en Internet.
        </p>

        <p>
          9.7.3. Recordá que podás permitir, bloquear o eliminar estas cookies
          cuando quieras a través de las opciones de configuración de su
          dispositivo o terminal. Para ello, podés consultar la información de
          soporte más actualizada de dichos dispositivos para conocer el modo en
          que podés eliminar las cookies, dado que el modo puede diferir entre
          distintas versiones y sistemas operativos.
        </p>

        <p>9.8. Ejercicio de derechos:</p>

        <p>
          0.8.1. Como titular de los datos personales tenés la facultad de
          ejercer el derecho de acceso a los mismos en forma gratuita a
          intervalos no inferiores a seis meses, salvo que acredites un interés
          legítimo al efecto conforme lo establecido en el artículo 14, inciso 3
          de la Ley nº 25.326. Declarás conocer que la AGENCIA DE ACCESO A LA
          INFORMACIÓN PÚBLICA en su carácter de órgano de control de la Ley N°
          25.326, tiene la atribución de atender las denuncias y reclamos que
          interpongan quienes resulten afectados en sus derechos por
          incumplimiento de las normas vigentes en materia de datos personales.
        </p>

        <p>
          0.8.2. Como titular de los datos, podrás en cualquier momento
          solicitar el retiro o bloqueo, total o parcial, de tu nombre de los
          bancos de datos a los que se refiere el artículo 27, inciso 3, de la
          Ley nº 25.326. Podrás realizar los pedidos de retiro o bloqueo
          personalmente en las oficinas comerciales de Movistar, a través del
          *611 o bien mediante el envío de cartas a Av. Independencia 169,
          Planta Baja, CABA, o bien comunicándote con cada una de las empresas
          antes mencionadas. Movistar y/o la empresa vinculada correspondiente
          procederá a cumplir con el pedido dentro de los 5 días hábiles de
          recibida la comunicación.
        </p>

        <p>0.9. Seguridad de los datos:</p>

        <p>
          10.9.1. Movistar se preocupa por garantizar la seguridad, el secreto y
          la confidencialidad de tus datos, comunicaciones e información
          personal. Por eso, como parte de nuestro compromiso y en cumplimiento
          de la legislación vigente, hemos adoptado las más exigentes y robustas
          medidas de seguridad y medios técnicos para evitar su pérdida, mal uso
          o su acceso sin su autorización.
        </p>

        <p>
          9.9.2. En este sentido, también ponemos a tu disposición una
          funcionalidad en Mi Movistar que te permitirá visualizar y gestionar
          un registro de los accesos o sesiones abiertas en tu cuenta de
          Usuario, así como los dispositivos utilizados para ello y el lugar
          desde el que se ha accedido en cada momento, con el objetivo de que
          puedas cerrar dichas sesiones y evitar accesos no autorizados.
        </p>

        <p>
          9.9.3. Además, nos comprometemos a actuar con rapidez y
          responsabilidad en el caso de que la seguridad de tus datos pueda
          estar en peligro, y a informarte si fuese relevante.
        </p>

        <p>9.10. Baja de Mi Movistar:</p>

        <p>
          9.10.1. Cualquier Usuario podrá dar de baja su cuenta en Mi Movistar
          en cualquier momento y sin cargo. En caso de baja, perderás la
          información, contactos y datos en general que pudiese tener en la
          misma, así como el derecho a utilizar cualesquiera beneficios o
          servicios que pudieses tener activos a la fecha de la baja y/o haber
          contratado con anterioridad como Usuario de Mi Movistar.
        </p>

        <p>
          9.10.2. De igual forma, te recordamos que también podrás desinstalar
          cuando quieras Mi Movistar de tu dispositivo o terminal móvil,
          mediante las distintas opciones que te ofrezca el mismo. No obstante,
          borrar o desinstalar Mi Movistar no implica la baja como Usuario. En
          caso de que solicites su baja de Mi Movistar y sin perjuicio de las
          obligaciones de conservación de datos que pudiesen establecerse por la
          legislación vigente, Movistar se compromete a cancelar toda su
          información y datos personales.
        </p>

        <p>
          <strong>10. Seguridad de Mi Movistar</strong>
        </p>

        <p>
          10.1. Movistar tiene implantadas robustas medidas para garantizar la
          seguridad, confidencialidad y privacidad de tu información.. Del mismo
          modo, podremos establecer políticas de uso razonable de nuestros
          servicios con la finalidad de prevenir posibles fraudes, usos ilícitos
          y/o abusivos. Se entiende por uso excesivo o no razonable aquél que se
          encuentre de forma significativa por encima del uso medio que realizan
          los Usuarios. En estos casos, Movistar podrá avisarte, reservándose
          además el derecho a suspender el servicio o bien, en los casos más
          graves, dar de baja al Usuario.
        </p>

        <p>
          10.2. Igualmente, Movistar podrá poner en conocimiento de las
          autoridades competentes, o bien colaborar con éstas, ante cualquier
          posible infracción de la legislación vigente que se detecte en Mi
          Movistar, especialmente en caso de que tal infracción pudiera suponer
          la comisión de delito.
        </p>

        <p>
          <strong>11. Propiedad intelectual e industrial</strong>
        </p>

        <p>
          11.1. Movistar cuenta con todos los derechos y autorizaciones
          necesarias sobre Mi Movistar, incluyendo tanto sus marcas como la app
          móvil. En este sentido, se te otorga únicamente una licencia limitada,
          intransferible, no apta para ser sublicenciable, temporal, no
          exclusiva, revocable y, en tanto no se te comunique lo contrario,
          gratuita, para que puedas utilizar, descargar y/o instalar Mi Movistar
          en tus dispositivos, conforme a lo previsto en estos T&amp;Cs y para
          los usos previstos. No tendrás derecho a sublicenciar, vender, ceder,
          alquilar, distribuir, transferir o, de cualquier otra manera, otorgar
          a terceros derechos sobre Mi Movistar. Asimismo, no deberás realizar
          ninguna acción para poner en peligro, limitar o, de forma alguna,
          interferir con los derechos de propiedad intelectual de Mi Movistar,
          la cual usará con sujeción a estos T&amp;CS. En todo caso, Movistar se
          reserva los derechos no expresamente otorgados al Usuario en virtud de
          los presentes T&amp;Cs.
        </p>

        <p>
          11.2. Si bien conservará todos los derechos sobre los contenidos que
          generes o envíes a través de Mi Movistar, otorgas a Movistar una
          licencia no exclusiva, de ámbito mundial y limitada al tiempo que
          tengas activa tu cuenta y/o bien cuando decidas eliminarlos, para
          reproducir los mismos y adaptarlos a las necesidades técnicas de Mi
          Movistar y/o de Movistar.
        </p>

        <p>
          <strong>12. Responsabilidad y obligaciones</strong>
        </p>

        <p>
          12.1. Movistar no garantiza el uso, o uso permanente, de Mi Movistar a
          los Usuarios. En concreto, los servicios de Mi Movistar se ofrecen sin
          garantía de ningún tipo dado que su calidad y disponibilidad pueden
          verse afectadas por múltiples factores ajenos a Movistar como son,
          entre otros, la ubicación geográfica del Usuario, limitaciones o
          restricciones de las redes o la compatibilidad del dispositivo y
          sistema operativo utilizado por éste. Igualmente, aceptas que el
          servicio pueda verse interrumpido cuando sea necesario por labores de
          mantenimiento. Movistar no garantiza, y en consecuencia no será
          responsable, por las imprecisiones, errores, defectos, fallas,
          retrasos, virus o interrupciones que presente Mi Movistar. Tampoco
          garantiza y en consecuencia, no será responsable por su confiabilidad,
          calidad, precisión, integridad o validez. Mi Movistar es provista en
          las condiciones que se encuentre para su descarga o utilización, y
          Movistar no otorga garantía de ningún tipo por la misma y expresamente
          deslinda cualquier responsabilidad en cuanto a la prestación,
          utilidad, disponibilidad, almacenamiento y manejo de información,
          seguridad, propiedad y/o derechos relacionados con Mi Movistar. La
          descarga y uso de Mi Movistar caen bajo tu exclusiva responsabilidad.
        </p>

        <p>
          12.2. Movistar no será responsable por los daños y perjuicios, lucro
          cesante o cualquier otro daño emergente por el uso de Mi Movistar. A
          todo evento y en tanto puede bloquear el acceso a Mi Movistar desde
          cualquier dispositivo, Movistar no se responsabiliza por los cargos
          incurridos como consecuencia del uso en dispositivos perdidos,
          hurtados o robados.
        </p>

        <p>
          12.3. En cualquier caso, Movistar se reserva el derecho a interrumpir,
          suspender y/o modificar, en cualquier momento, cualquiera o todos los
          servicios de Mi Movistar, ya sea de forma permanente o transitoria. No
          se requerirá conformidad de los Usuarios, ni será necesario aviso
          previo alguno.
        </p>

        <p>
          12.4. Por todo ello, Movistar no será responsable de los problemas de
          acceso o disponibilidad de Mi Movistar y/o sus servicios, ni de los
          perjuicios que se pudieran causar por ello, cuando éstos procedan de
          factores ajenos a su ámbito de control. Igualmente, Movistar no se
          hace responsable de los fallos, incompatibilidades y/o daños de tus
          terminales o dispositivos que, en su caso, se pudiesen derivar de la
          descarga y/o uso de Mi Movistar, especialmente cuando éstos no sean
          compatibles o adecuados para utilizar nuestros servicios.
          Concretamente, Movistar no se responsabilizará por la pérdida o daño
          de la agenda de contactos o la pérdida del historial que puedan
          ocurrir al usar Mi Movistar.
        </p>

        <p>
          12.5. Movistar no asume la obligación de controlar los contenidos que
          transmitan o compartan los Usuarios a través de Mi Movistar. No
          obstante, queda prohibido cualquier acceso y/o uso de Mi Movistar
          contrario a estos T&amp;Cs, a las condiciones específicas de cada
          servicio y, en general, a la legalidad vigente, los principios de
          buena fe, la moral y el orden público. El Usuario es el responsable
          del uso que decida hacer de Mi Movistar y deberá garantizar que su
          utilización no vulnera derechos de terceros. Movistar podrá suspender
          o interrumpirle Mi Movistar en caso de que sospeche que el Usuario
          viola estos T&amp;Cs, los de los servicios provistos por Movistar, o
          la utiliza de forma ilegal, no autorizada o inadecuada.
        </p>

        <p>
          12.6. Los servicios de Mi Movistar se ofrecen exclusivamente para su
          uso personal y privado como Usuario final por tanto, no debes
          revenderlos ni utilizarlos para una finalidad económica, comercial o
          similar, sin la autorización de Movistar. El incumplimiento de tus
          obligaciones como Usuario podrá implicar la baja inmediata de Mi
          Movistar y/o sus servicios todo ello sin derecho a recibir
          compensación y/o reembolso de ningún tipo.
        </p>

        <p>
          12.7. Los T&amp;Cs aplicables al servicio WiFi y/o de acceso a
          internet de terceros operadores, con el cual podrías utilizar Mi
          Movistar, son ajenos a Movistar y serán aquellos que contrates con el
          proveedor correspondiente. Por lo tanto, Movistar no tendrá
          responsabilidad alguna al efecto.
        </p>

        <p>
          12.8. En caso de que la información o los datos suministrados por el
          Usuario no sean verdaderos, éste será responsable por los daños que
          este hecho pudiera ocasionar.
        </p>

        <p>
          12.9. Acepta que cualquier limitación de responsabilidad incluida en
          estos T&amp;C respecto de Movistar, alcanza a también a todas y cada
          una de las empresas pertenecientes al Grupo Telefónica, con los mismos
          alcances de estos T&amp;C.
        </p>

        <p>
          <strong>13. Miscelánea</strong>
        </p>

        <p>
          13.1 Mi Movistar está pensada para ser utilizada por cualquier Usuario
          que cumpla los presentes T&amp;Cs. Asimismo, es posible que Mi
          Movistar tenga restricciones, no funcione o bien sus servicios no
          estén disponibles en todo momento. Como regla general, y en tanto Mi
          Movistar está directamente conectada con la/s línea/s móvil/es o
          fija/s del Usuario vinculada/s, la suspensión o baja de las líneas o
          los servicios provistos por Movistar, o el incumplimiento de sus
          T&amp;Cs por cualquier motivo, implicará la suspensión o baja de Mi
          Movistar, o cualquiera de sus servicios, según corresponda.
        </p>

        <p>
          13.2. Movistar se reserva el derecho de revisar estos T&amp;Cs en
          cualquier momento por razones legales, técnicas, comerciales o por
          decisiones estratégicas. En ese caso, te avisaremos de ello
          publicándolo en Mi Movistar y, si continúas utilizándolo y no
          solicitas tu baja como Usuario, entenderemos que aceptas las
          modificaciones.
        </p>

        <p>
          13.3. Todas las sugerencias y comentarios que realices podrán ser
          tenidos en cuenta, implementados y/o adaptados por Movistar sin que
          ello genere derecho alguno a favor del Usuario.
        </p>

        <p>
          13.4. Si bien estos T&amp;Cs podrán estar disponibles en varios
          idiomas, prevalecerá la versión en español en el supuesto de
          contradicciones. Además, algunas partes de Mi Movistar, y/o
          determinados servicios disponibles a través de la misma, estarán
          disponibles únicamente en idioma español.
        </p>

        <p>
          13.5. Entendés y aceptas que se aplicarán a estos T&amp;C, y a Mi
          Movistar, la normativa vigente en la República Argentina, sin
          aplicación de sus normas de reenvío. Cualquier cuestión surgida de
          estos T&amp;C, y/o Mi Movistar, será sometida a la jurisdicción de los
          Tribunales Ordinarios correspondientes a tu domicilio o de los
          Tribunales competentes en razón de la materia, en cuyo caso la
          competencia territorial será la del fuero correspondiente a tu
          domicilio. Para el eventual caso de reclamo, se considerará domicilio
          legalmente constituido el que figure en la Factura y serán de
          aplicación también las demás cláusulas de los T&amp;Cs del servicio
          aplicable.
        </p>

        <p>
          13.6. El incumplimiento de cualquiera de las obligaciones asumidas, o
          cualquiera de las condiciones convenidas en la presente, ocasionará
          automáticamente la caducidad del servicio y, en su caso, de Mi
          Movistar. Movistar está facultada para modificar el sistema o Mi
          Movistar, así como a interrumpir su prestación, sin previo aviso.
        </p>

        <p>
          13.7 Mi Movistar requiere que el cliente mantenga activo el servicio
          de geolocalización de su teléfono móvil para proveerle los servicios
          que presta a través de Mi Movistar de una manera más eficiente.
        </p>

        <p>
          <strong>14. Información corporativa y contacto</strong>
        </p>

        <p>
          14.1. Telefónica Móviles Argentina, S.A. y Telefónica de Argentina
          S.A. tienen domicilio en Av. Independencia 169, Planta Baja, Ciudad
          Autónoma de Buenos Aires (República de Argentina).
        </p>
        <p>
          14.2. Todas las notificaciones y/o comunicaciones que deban efectuarse
          bajo estos T&amp;Cs, podrán realizarse: (i) al Usuario: por cualquier
          medio, incluyendo, correo electrónico, línea móvil,, línea fija,
          cuenta de correo electrónica o postal consignada por éste, a través de
          Mi Movistar, por carta al domicilio del Usuario, por SMS al número de
          la/s línea/s móvil/es vinculad/as u otros medios de comunicación que
          existan entre Movistar y el Usuario; (ii) a Movistar: a su domicilio
          legal (Av. Independencia 169, Planta Baja, Ciudad de Buenos Aires,
          Argentina).
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
