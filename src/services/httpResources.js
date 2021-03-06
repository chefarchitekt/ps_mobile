export const phoneSpeakApi = {
    system: {
        'dialplans': { verb: 'GET', url: 'accounts/{accountId}/dialplans' }
    },
    account: {
        'get': { verb: 'GET', url: 'accounts/{accountId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}' },
        'update': { verb: 'POST', url: 'accounts/{accountId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}' },
        'listDescendants': { verb: 'GET', url: 'accounts/{accountId}/descendants' },
        'listChildren': { verb: 'GET', url: 'accounts/{accountId}/children' },
        'listParents': { verb: 'GET', url: 'accounts/{accountId}/tree' },
        'searchByName': { verb: 'GET', url: 'search?t=account&q=name&v={accountName}' },
        'searchAll': { verb: 'GET', url: 'search/multi?t=account&by_name={searchValue}&by_realm={searchValue}&by_id={searchValue}' },
        'promote': { verb: 'PUT', url: 'accounts/{accountId}/reseller' },
        'demote': { verb: 'DELETE', url: 'accounts/{accountId}/reseller' }
    },
    appsStore: {
        'get': { verb: 'GET', 'url': 'accounts/{accountId}/apps_store/{appId}' },
        'list': { verb: 'GET', 'url': 'accounts/{accountId}/apps_store' },
        'getIcon': { verb: 'GET', 'url': 'accounts/{accountId}/apps_store/{appId}/icon', dataType: 'text' },
        'update': { verb: 'POST', 'url': 'accounts/{accountId}/apps_store/{appId}' },
        'add': { verb: 'PUT', 'url': 'accounts/{accountId}/apps_store/{appId}' },
        'delete': { verb: 'DELETE', 'url': 'accounts/{accountId}/apps_store/{appId}' },
        'getBlacklist': { verb: 'GET', 'url': 'accounts/{accountId}/apps_store/blacklist' },
        'updateBlacklist': { verb: 'POST', 'url': 'accounts/{accountId}/apps_store/blacklist' }
    },
    auth: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/user_auth/{token}' },
        'recovery': { verb: 'PUT', url: 'user_auth/recovery' },
        'recoveryResetId': { verb: 'POST', url: 'user_auth/recovery' }
    },
    balance: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/transactions/current_balance' },
        'getMonthly': { verb: 'GET', url: 'accounts/{accountId}/transactions/monthly_recurring?created_from={from}&created_to={to}' },
        'getCharges': { verb: 'GET', url: 'accounts/{accountId}/transactions?created_from={from}&created_to={to}&reason={reason}' },
        'getSubscriptions': { verb: 'GET', url: 'accounts/{accountId}/transactions/subscriptions' },
        'filtered': { verb: 'GET', url: 'accounts/{accountId}/transactions?created_from={from}&created_to={to}&reason={reason}' },
        'add': { verb: 'PUT', url: 'accounts/{accountId}/braintree/credits' },
        'remove': { verb: 'DELETE', url: 'accounts/{accountId}/transactions/debit' }
    },
    billing: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/braintree/customer' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/braintree/customer' }
    },
    callflow: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/callflows/{callflowId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/callflows' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/callflows/{callflowId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/callflows/{callflowId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/callflows/{callflowId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/callflows' },
        'searchByNameAndNumber': { verb: 'GET', url: 'accounts/{accountId}/search?t=callflow&q=name_and_number&v={value}' },
        'searchByNumber': { verb: 'GET', url: 'accounts/{accountId}/search?t=callflow&q=number&v={value}' }
    },
    cdrs: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/cdrs/{cdrId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/cdrs' },
        'listByUser': { verb: 'GET', url: 'accounts/{accountId}/users/{userId}/cdrs' },
        'listByInteraction': { verb: 'GET', url: 'accounts/{accountId}/cdrs/interaction' },
        'listLegs': { verb: 'GET', url: 'accounts/{accountId}/cdrs/legs/{callId}' }
    },
    channel: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/channels' }
    },
    clickToCall: {
        'create': { verb: 'PUT', url: 'accounts/{accountId}/clicktocall' },
        'get': { verb: 'GET', url: 'accounts/{accountId}/clicktocall/{clickToCallId}' },
        'update': { verb: 'GET', url: 'accounts/{accountId}/clicktocall/{clickToCallId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/clicktocall/{clickToCallId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/clicktocall' },
        'connect': { verb: 'POST', url: 'accounts/{accountId}/clicktocall/{clickToCallId}/connect' }
    },
    conference: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/conferences/{conferenceId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/conferences' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/conferences/{conferenceId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/conferences/{conferenceId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/conferences' },
        'action': { verb: 'PUT', url: 'accounts/{accountId}/conferences/{conferenceId}' },
        'participantsList': { verb: 'GET', url: 'accounts/{accountId}/conferences/{conferenceId}/participants' },
        'participantsBulkAction': { verb: 'PUT', url: 'accounts/{accountId}/conferences/{conferenceId}/participants' },
        'participantsAction': { verb: 'PUT', url: 'accounts/{accountId}/conferences/{conferenceId}/participants/{participantId}' }
    },
    connectivity: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/connectivity/{connectivityId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/connectivity' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/connectivity/{connectivityId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/connectivity' }
    },
    contactList: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/contact_list' }
    },
    comments: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/comments/{commentId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/comments' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/comments' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/comments/{commentId}' },
        'updateAll': { verb: 'POST', url: 'accounts/{accountId}/comments' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/comments/{commentId}' },
        'deleteAll': { verb: 'DELETE', url: 'accounts/{accountId}/comments' },
    },
    device: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/devices/{deviceId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/devices' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/devices/{deviceId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/devices/{deviceId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/devices/{deviceId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/devices' },
        'getStatus': { verb: 'GET', url: 'accounts/{accountId}/devices/status' },
        'quickcall': { verb: 'GET', url: 'accounts/{accountId}/devices/{deviceId}/quickcall/{number}' },
        'restart': { verb: 'POST', url: 'accounts/{accountId}/devices/{deviceId}/sync' },
        'updatePresence': { verb: 'POST', url: 'accounts/{accountId}/device/{deviceId}/presence' }
    },
    directory: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/directories/{directoryId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/directories' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/directories/{directoryId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/directories/{directoryId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/directories' }
    },
    faxbox: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/faxboxes/{faxboxId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/faxboxes' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/faxboxes/{faxboxId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/faxboxes/{faxboxId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/faxboxes' },
    },
    smtpLogs: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/notifications/smtplog' },
        'get': { verb: 'GET', url: 'accounts/{accountId}/notifications/smtplog/{logId}' },
    },
    faxes: {
        'getLogs': { verb: 'GET', url: 'accounts/{accountId}/faxes/smtplog' },
        'getLogDetails': { verb: 'GET', url: 'accounts/{accountId}/faxes/smtplog/{logId}' },

        'listInbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/inbox' },
        'getDetailsInbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/inbox/{faxId}' },
        'getAttachmentInbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/inbox/{faxId}/attachment' },
        'updateInbound': { verb: 'PUT', url: 'accounts/{accountId}/faxes/inbox/{faxId}' },
        'deleteInbound': { verb: 'DELETE', url: 'accounts/{accountId}/faxes/inbox/{faxId}' },

        'listOutbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/outbox' },
        'getDetailsOutbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/outbox/{faxId}' },
        'getAttachmentOutbound': { verb: 'GET', url: 'accounts/{accountId}/faxes/outbox/{faxId}/attachment' },
        'updateOutbound': { verb: 'PUT', url: 'accounts/{accountId}/faxes/outbox/{faxId}' },
        'deleteOutbound': { verb: 'DELETE', url: 'accounts/{accountId}/faxes/outbox/{faxId}' }
    },
    globalResources: {
        'get': { verb: 'GET', url: 'resources/{resourceId}' },
        'create': { verb: 'PUT', url: 'resources' },
        'update': { verb: 'POST', url: 'resources/{resourceId}' },
        'delete': { verb: 'DELETE', url: 'resources/{resourceId}' },
        'list': { verb: 'GET', url: 'resources' },
        'updateCollection': { verb: 'POST', url: 'resources/collection' },
        'listJobs': { verb: 'GET', url: 'resources/jobs' },
        'getJob': { verb: 'GET', url: 'resources/jobs/{jobId}' },
        'createJob': { verb: 'PUT', url: 'resources/jobs' }
    },
    group: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/groups/{groupId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/groups' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/groups/{groupId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/groups/{groupId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/groups' }
    },
    inspector: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/call_inspector/{callId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/call_inspector' }
    },
    ips: {
        'add': { verb: 'POST', url: 'accounts/{accountId}/ips/{ip}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/ips/{ip}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/ips?zone={zone}&quantity={quantity}' },
        'listAssigned': { verb: 'GET', url: 'accounts/{accountId}/ips/assigned' },
        'listZones': { verb: 'GET', url: 'accounts/{accountId}/ips/zones' }
    },
    ledgers: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/ledgers' },
        'get': { verb: 'GET', url: 'accounts/{accountId}/ledgers/{ledgerId}' },
        'getDetails': { verb: 'GET', url: 'accounts/{accountId}/ledgers/{ledgerId}/{id}' }
    },
    limits: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/limits' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/limits' }
    },
    localResources: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/resources/{resourceId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/resources' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/resources/{resourceId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/resources/{resourceId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/resources' },
        'updateCollection': { verb: 'POST', url: 'accounts/{accountId}/resources/collection' },
        'listJobs': { verb: 'GET', url: 'accounts/{accountId}/resources/jobs' },
        'getJob': { verb: 'GET', url: 'accounts/{accountId}/resources/jobs/{jobId}' },
        'createJob': { verb: 'PUT', url: 'accounts/{accountId}/resources/jobs' }
    },
    media: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/media/{mediaId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/media' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/media/{mediaId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/media/{mediaId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/media' },
        'lang': { verb: 'GET', url: 'accounts/{accountId}/media/languages/missing' },
        'upload': { verb: 'POST', url: 'accounts/{accountId}/media/{mediaId}/raw', type: 'application/x-base64' }
    },
    menu: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/menus/{menuId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/menus' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/menus/{menuId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/menus/{menuId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/menus/{menuId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/menus' }
    },
    metaflow: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/metaflows' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/metaflows' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/metaflows' },
    },
    numbers: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}' },
        'activate': { verb: 'PUT', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}/activate' },
        'activateBlock': { verb: 'PUT', url: 'accounts/{accountId}/phone_numbers/collection/activate' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}' },
        'deleteBlock': { verb: 'DELETE', url: 'accounts/{accountId}/phone_numbers/collection' },
        'identify': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers/{phoneNumber}/identify' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers?filter_state=["in_service","port_in"]' },
        'listAll': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers' },
        'listClassifiers': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers/classifiers' },
        'matchClassifier': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers/classifiers/{phoneNumber}' },
        'search': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers?prefix={pattern}&quantity={limit}&offset={offset}' },
        'searchBlocks': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers?prefix={pattern}&quantity={size}&offset={offset}&blocks={limit}' },
        'searchCity': { verb: 'GET', url: 'accounts/{accountId}/phone_numbers/prefix?city={city}' },
        'sync': { verb: 'POST', url: 'accounts/{accountId}/phone_numbers/fix' }
    },
    pivot: {
        'listDebug': { verb: 'GET', url: 'accounts/{accountId}/pivot/debug' },
        'getDebug': { verb: 'GET', url: 'accounts/{accountId}/pivot/debug/{callId}' }
    },
    port: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{portRequestId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/port_requests' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/port_requests/{portRequestId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/port_requests/{portRequestId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/port_requests' },
        'listByState': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{state}' },
        'listDescendants': { verb: 'GET', url: 'accounts/{accountId}/descendants/port_requests' },
        'listDescendantsByState': { verb: 'GET', url: 'accounts/{accountId}/descendants/port_requests/{state}' },
        'listAttachments': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{portRequestId}/attachments' },
        'getAttachment': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{portRequestId}/attachments/{documentName}', dataType: 'text' },
        'createAttachment': { verb: 'PUT', url: 'accounts/{accountId}/port_requests/{portRequestId}/attachments?filename={documentName}', type: 'application/pdf' },
        'updateAttachment': { verb: 'POST', url: 'accounts/{accountId}/port_requests/{portRequestId}/attachments/{documentName}', type: 'application/pdf' },
        'deleteAttachment': { verb: 'DELETE', url: 'accounts/{accountId}/port_requests/{portRequestId}/attachments/{documentName}' },
        'changeState': { verb: 'PATCH', url: 'accounts/{accountId}/port_requests/{portRequestId}/{state}' },
        'listComments': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments' },
        'getComment': { verb: 'GET', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments/{commentId}' },
        'addComment': { verb: 'PUT', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments' },
        'updateComment': { verb: 'POST', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments/{commentId}' },
        'deleteComment': { verb: 'DELETE', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments/{commentId}' },
        'deleteAllComments': { verb: 'DELETE', url: 'accounts/{accountId}/port_requests/{portRequestId}/comments' },
        'searchNumber': { verb: 'GET', url: 'accounts/{accountId}/port_requests?by_number={number}' },
        'searchNumberByDescendants': { verb: 'GET', url: 'accounts/{accountId}/descendants/port_requests?by_number={number}' }
    },
    presence: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/presence?include_presentity=true' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/presence/{presenceId}' }
    },
    recording: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/recordings' }
    },
    registrations: {
        'list': { verb: 'GET', url: 'accounts/{accountId}/registrations' }
    },
    resourceTemplates: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/resource_templates/{resourceId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/resource_templates' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/resource_templates/{resourceId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/resource_templates/{resourceId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/resource_templates' }
    },
    servicePlan: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/service_plans/{planId}' },
        'add': { verb: 'POST', url: 'accounts/{accountId}/service_plans/{planId}' },
        'addMany': { verb: 'POST', url: 'accounts/{accountId}/service_plans/' },
        'remove': { verb: 'DELETE', url: 'accounts/{accountId}/service_plans/{planId}' },
        'removeMany': { verb: 'DELETE', url: 'accounts/{accountId}/service_plans/' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/service_plans/' },
        'addManyOverrides': { verb: 'POST', url: 'accounts/{accountId}/service_plans/override' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/service_plans' },
        'listCurrent': { verb: 'GET', url: 'accounts/{accountId}/service_plans/current' },
        'getCsv': { verb: 'GET', url: 'accounts/{accountId}/service_plans/current?depth=4&identifier=items&accept=csv' },
        'listAvailable': { verb: 'GET', url: 'accounts/{accountId}/service_plans/available' },
        'getAvailable': { verb: 'GET', url: 'accounts/{accountId}/service_plans/available/{planId}' },
        'reconciliate': { verb: 'POST', url: 'accounts/{accountId}/service_plans/reconciliation' },
        'synchronize': { verb: 'POST', url: 'accounts/{accountId}/service_plans/synchronization' }
    },
    tasks: {
        'summary': { verb: 'GET', url: 'tasks' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/tasks' },
        'add': { verb: 'PUT', url: 'accounts/{accountId}/tasks?category={category}&action={action}' },
        'get': { verb: 'GET', url: 'accounts/{accountId}/tasks/{taskId}' },
        'start': { verb: 'PATCH', url: 'accounts/{accountId}/tasks/{taskId}' },
        'getOutput': { verb: 'GET', url: 'accounts/{accountId}/tasks/{taskId}/output', type: 'text/csv', dataType: 'text' },
        'getInput': { verb: 'GET', url: 'accounts/{accountId}/tasks/{taskId}/input', type: 'text/csv', dataType: 'text' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/tasks/{taskId}' },
    },
    temporalRule: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/temporal_rules/{ruleId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/temporal_rules' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/temporal_rules/{ruleId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/temporal_rules/{ruleId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/temporal_rules/{ruleId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/temporal_rules' }
    },
    temporalSet: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/temporal_rules_sets/{setId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/temporal_rules_sets' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/temporal_rules_sets/{setId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/temporal_rules_sets/{setId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/temporal_rules_sets' }
    },
    user: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/users/{userId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/users' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/users/{userId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/users/{userId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/users/{userId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/users' },
        'devices': { verb: 'GET', url: 'accounts/{accountId}/users/{userId}/devices' },
        'quickcall': { verb: 'GET', url: 'accounts/{accountId}/users/{userId}/quickcall/{number}' },
        'hotdesks': { verb: 'GET', url: 'accounts/{accountId}/users/{userId}/hotdesks' },
        'updatePresence': { verb: 'POST', url: 'accounts/{accountId}/users/{userId}/presence' }
    },
    voicemail: {
        'get': { verb: 'GET', url: 'accounts/{accountId}/vmboxes/{voicemailId}' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/vmboxes' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/vmboxes/{voicemailId}' },
        'patch': { verb: 'PATCH', url: 'accounts/{accountId}/vmboxes/{voicemailId}' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/vmboxes/{voicemailId}' },
        'list': { verb: 'GET', url: 'accounts/{accountId}/vmboxes' },
        'listMessages': { verb: 'GET', url: 'accounts/{accountId}/vmboxes/{voicemailId}/messages' },
        'updateMessages': { verb: 'POST', url: 'accounts/{accountId}/vmboxes/{voicemailId}/messages' },
        'updateMessage': { verb: 'POST', url: 'accounts/{accountId}/vmboxes/{voicemailId}/messages/{mediaId}' },
        'deleteMessage': { verb: 'DELETE', url: 'accounts/{accountId}/vmboxes/{voicemailId}/messages/{mediaId}' },
        'download': { verb: 'GET', url: 'accounts/{accountId}/vmboxes/{voicemailId}/messages/{mediaId}/raw' },

    },
    webhooks: {
        'get': { 'verb': 'GET', 'url': 'accounts/{accountId}/webhooks/{webhookId}' },
        'create': { 'verb': 'PUT', 'url': 'accounts/{accountId}/webhooks' },
        'update': { 'verb': 'POST', 'url': 'accounts/{accountId}/webhooks/{webhookId}' },
        'delete': { 'verb': 'DELETE', 'url': 'accounts/{accountId}/webhooks/{webhookId}' },
        'list': { 'verb': 'GET', 'url': 'accounts/{accountId}/webhooks' },
        'listAccountAttempts': { 'verb': 'GET', 'url': 'accounts/{accountId}/webhooks/attempts' },
        'listAttempts': { 'verb': 'GET', 'url': 'accounts/{accountId}/webhooks/{webhookId}/attempts' },
        'listAvailable': { 'verb': 'GET', 'url': 'webhooks' },
        'patch': { 'verb': 'PATCH', 'url': 'accounts/{accountId}/webhooks/{webhookId}' },
        'patchAll': { 'verb': 'PATCH', 'url': 'accounts/{accountId}/webhooks' }
    },
    websockets: {
        'listEvents': { 'verb': 'GET', 'url': 'websockets' },
        'list': { 'verb': 'GET', 'url': 'accounts/{accountId}/websockets' },
        'listBindings': { 'verb': 'GET', 'url': 'accounts/{accountId}/websockets/{websocketId}' }
    },
    whitelabel: {
        'getByDomain': { verb: 'GET', url: 'whitelabel/{domain}' },
        'getLogoByDomain': { verb: 'GET', url: 'whitelabel/{domain}/logo' },
        'getIconByDomain': { verb: 'GET', url: 'whitelabel/{domain}/icon' },
        'getWelcomeByDomain': { verb: 'GET', url: 'whitelabel/{domain}/welcome', type: 'text/html', dataType: 'html' },
        'get': { verb: 'GET', url: 'accounts/{accountId}/whitelabel' },
        'getLogo': { verb: 'GET', url: 'accounts/{accountId}/whitelabel/logo' },
        'getIcon': { verb: 'GET', url: 'accounts/{accountId}/whitelabel/icon' },
        'getWelcome': { verb: 'GET', url: 'accounts/{accountId}/whitelabel/welcome', type: 'text/html', dataType: 'html' },
        'update': { verb: 'POST', url: 'accounts/{accountId}/whitelabel' },
        'updateLogo': { verb: 'POST', url: 'accounts/{accountId}/whitelabel/logo', type: 'application/x-base64' },
        'updateIcon': { verb: 'POST', url: 'accounts/{accountId}/whitelabel/icon', type: 'application/x-base64' },
        'updateWelcome': { verb: 'POST', url: 'accounts/{accountId}/whitelabel/welcome', type: 'text/html', dataType: 'html' },
        'create': { verb: 'PUT', url: 'accounts/{accountId}/whitelabel' },
        'delete': { verb: 'DELETE', url: 'accounts/{accountId}/whitelabel' },
        'listNotifications': { verb: 'GET', url: 'accounts/{accountId}/notifications' },
        'getNotification': { verb: 'GET', url: 'accounts/{accountId}/notifications/{notificationId}' },
        'getNotificationText': { verb: 'GET', url: 'accounts/{accountId}/notifications/{notificationId}', type: 'text/plain', dataType: 'text' },
        'getNotificationHtml': { verb: 'GET', url: 'accounts/{accountId}/notifications/{notificationId}', type: 'text/html', dataType: 'html' },
        'updateNotification': { verb: 'POST', url: 'accounts/{accountId}/notifications/{notificationId}' },
        'updateNotificationText': { verb: 'POST', url: 'accounts/{accountId}/notifications/{notificationId}', type: 'text/plain', dataType: 'text' },
        'updateNotificationHtml': { verb: 'POST', url: 'accounts/{accountId}/notifications/{notificationId}', type: 'text/html', dataType: 'html' },
        'previewNotification': { verb: 'POST', url: 'accounts/{accountId}/notifications/{notificationId}/preview' },
        'deleteNotification': { verb: 'DELETE', url: 'accounts/{accountId}/notifications/{notificationId}' },
        'getDnsEntries': { verb: 'GET', url: 'accounts/{accountId}/whitelabel/domains' },
        'checkDnsEntries': { verb: 'POST', url: 'accounts/{accountId}/whitelabel/domains?domain={domain}' }
    }

};
