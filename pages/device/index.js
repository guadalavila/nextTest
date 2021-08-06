import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Device() {
    const [deviceInfo, setDeviceInfo] = useState({});
    const [data, setData] = useState("");
    const [isApp, setIsApp] = useState(false);

    useEffect(() => {
        if (window.ReactNativeWebView) {
            setIsApp(true);
            setData(window?.$native_device_info);
            setDeviceInfo(JSON.parse(window?.$native_device_info));
        }
    }, []);

    return (
        <div className={styles.container}>
            <div style={{ fontWeight: "bold", fontSize: 30 }}>Info Device:</div>
            {isApp ? (
                <div>
                    <p>
                        <strong>JSON: </strong>
                        {data}
                    </p>
                    <p>---------------------------------------------------------------------------------------</p>
                    <p>
                        <strong>AppName: </strong>
                        {deviceInfo?.applicationName}
                    </p>
                    <p>
                        <strong>Compilación SO: </strong>
                        {deviceInfo?.baseOs}
                    </p>
                    <p>
                        <strong>Nivel de Bateria: </strong>
                        {deviceInfo?.batteryLevel}
                    </p>
                    <p>
                        <strong>Cargando Bateria: </strong>
                        {deviceInfo?.batteryCharging === true
                            ? "true"
                            : "false"}
                    </p>
                    <p>
                        <strong>Marca: </strong>
                        {deviceInfo?.brand}
                    </p>
                    <p>
                        <strong>Paquete de la aplicación: </strong>
                        {deviceInfo?.bundleId}
                    </p>
                    <p>
                        <strong>Operador de red: </strong>
                        {deviceInfo?.carrier}
                    </p>
                    <p>
                        <strong>Nombre del diseño: </strong>
                        {deviceInfo?.device}
                    </p>
                    <p>
                        <strong>ID del dispositivo: </strong>
                        {deviceInfo?.deviceId}
                    </p>
                    <p>
                        <strong>Nombre del dispositivo: </strong>
                        {deviceInfo?.deviceName}
                    </p>
                    <p>
                        <strong>Tipo de dispositivo: </strong>
                        {deviceInfo?.deviceType}
                    </p>
                    <p>
                        <strong>Nombre HW: </strong>
                        {deviceInfo?.hardware}
                    </p>
                    <p>
                        <strong>Modo avión: </strong>
                        {deviceInfo?.isAirplaneMode === true ? "true" : "false"}
                    </p>
                    <p>
                        <strong>Fabricante del dispositivo: </strong>
                        {deviceInfo?.manufacturer}
                    </p>
                    <p>
                        <strong>Modelo del dispositivo: </strong>
                        {deviceInfo?.model}
                    </p>
                    <p>
                        <strong>Sistema operativo: </strong>
                        {deviceInfo?.systemName}
                    </p>
                    <p>
                        <strong>Versión del sistema operativo: </strong>
                        {deviceInfo?.systemVersion}
                    </p>
                    <p>
                        <strong>Versión de aplicación: </strong>
                        {deviceInfo?.version}
                    </p>
                    <p>
                        <strong>Agente de usuario del dispositivo: </strong>
                        {deviceInfo?.userAgent}
                    </p>
                </div>
            ) : (
                <div>No es app</div>
            )}
        </div>
    );
}
