# Para equipos y empresas

## 👥 Roles y permisos

Las cuentas de equipo tienen tres niveles de roles:

| Rol | Permisos |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Propietario** | Acceso a todas las funciones de la página Equipo, gestión del plan, facturación y permisos. |
| **Administrador** | Puede invitar, activar y desactivar a miembros y otros administradores. No puede modificar el plan, la facturación ni los permisos. |
| **Miembro** | No tiene acceso a la página Equipo. |

> 💡 **Consejo:** Los administradores pueden desactivar su propia licencia y transferirla a otro miembro. Así pueden conservar un rol exclusivamente administrativo sin consumir una licencia.

### Grupos

Los propietarios de equipo pueden crear grupos con administradores y permisos específicos. Activa los grupos desde [Permisos](https://mammouth.ai/app/account/settings/permissions).

### Invitaciones en grupo

Se puede invitar a los miembros **individualmente** o **en grupos de hasta 100 personas** pegando una lista de direcciones de correo electrónico (desde un archivo CSV o una hoja de cálculo).

### Privacidad de los usuarios

Las conversaciones y los documentos de cada usuario son **estrictamente confidenciales** y pertenecen a dicho usuario. Ningún miembro del equipo puede acceder a los datos de otro usuario, salvo que se compartan explícitamente mediante:

- compartir una conversación;
- compartir un Mammouth.

![Captura de los ajustes de equipo](/docs/teams/teams_settings.png)

---

## 🔒 Permisos

Los **propietarios** pueden restringir, a su discreción, determinadas funciones para todos los miembros del equipo:

- Desactivar algunos **proveedores de IA**.
- Desactivar el acceso a la **API**.
- Desactivar la generación de **vídeos**.
- **Conectores (MCP)**: los propietarios pueden configurar e implementar conectores (Microsoft 365, GitHub, Notion, Atlassian o MCP personalizados) para todos los miembros del equipo desde la página Permisos.

![Captura de permisos](/docs/teams/permissions.png)

---

## 🦣 Mammouths compartidos

Un **Mammouth** (espacio de trabajo de IA personalizado) se puede compartir dentro de un equipo con dos niveles de acceso:

- **Solo lectura**: los miembros invitados pueden usar el Mammouth, pero no modificar sus instrucciones ni los archivos asociados.
- **Lectura y edición**: los miembros invitados pueden modificar las instrucciones y los archivos asociados.

> ⚠️ Compartir un Mammouth **no implica** compartir las conversaciones que se mantienen en él. Por defecto, cada conversación sigue siendo privada.

### Compartir conversaciones

Es posible compartir una conversación, pero hay que **activar explícitamente** esta opción en la conversación correspondiente. Se comparte mediante un **enlace URL**.

---

## 🔀 Opción de planes combinados

Puedes **combinar los planes** (Starter, Standard y Expert) dentro del mismo equipo para adaptar el acceso a las necesidades reales de cada persona.

---

## 💳 Opciones de pago y facturación

### Pago en línea _(recomendado)_

Disponible en [mammouth.ai/pricing](https://mammouth.ai/pricing), con estos métodos de pago:

- 💳 Tarjeta bancaria
- 🅿️ PayPal
- 🛍️ Klarna

Estos métodos de pago te permiten **gestionar tu suscripción de forma autónoma**.

**Facturación:** se envía una factura automáticamente por correo electrónico con cada pago y también está disponible en tu espacio personal.

> 💡 Para empresas: al registrarte en la página de pago, selecciona **«Comprar como empresa»** e indica tu número de IVA europeo.

---

### Transferencia bancaria o mandato administrativo

Se acepta el pago por transferencia bancaria con estas condiciones:

- Compromiso **anual obligatorio**.

También se acepta el pago mediante **mandato administrativo (Chorus Pro)**.

**Para solicitar un presupuesto**, completa el [**formulario de presupuesto**](https://mammouth.ai/app/account/quote-request).

> ⏱️ Cada licencia añadida requiere un nuevo presupuesto y se tramitará **en un plazo de 72 horas laborables**.

---

## 🔐 SSO (inicio de sesión único)

La integración **SSO** está disponible con **Microsoft Entra ID, Okta, Keycloak** y otros proveedores de identidad SAML 2.0. Facilita la implementación de Mammouth en empresas o universidades con **más de 50 licencias**.

Más información en la [guía de integración de SSO](/docs/sso/).

## Créditos API y acceso a Mammouth Code para desarrolladores

Además del chat, las organizaciones pueden asignar un presupuesto mensual de créditos API a cada miembro. Esto resulta especialmente útil para los desarrolladores que quieran utilizar [Mammouth Code](/es/docs/mammouth-code/index.md).
