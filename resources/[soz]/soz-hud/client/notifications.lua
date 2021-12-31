
--- DrawNotification Display basic notification
--- @param msg string Notification message
--- @param flash boolean Notification flash on the screen
--- @param save boolean Save notification in the brief ?
local function DrawNotification(msg, flash, save)
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName(msg)
    EndTextCommandThefeedPostTicker(flash or false, save or false)
end

RegisterNetEvent('soz-hud:client:DrawNotification', function(msg, flash, save)
    DrawNotification(msg, flash, save)
end)

exports('DrawNotification', function(msg, flash, save)
    DrawNotification(msg, flash, save)
end)

--- DrawAdvancedNotification Display advanced notification
--- @param msg string Notification message
--- @param title string Notification title
--- @param subtitle string Notification subtitle
--- @param image string Notification image (https://wiki.gtanet.work/index.php?title=Notification_Pictures)
--- @param iconType number Notification icon (https://docs.fivem.net/natives/?_0x1CCD9A37359072CF)
--- @param flash boolean Notification flash on the screen
--- @param save boolean Save notification in the brief ?
--- @param color number Notification color (https://gyazo.com/68bd384455fceb0a85a8729e48216e15)
local function DrawAdvancedNotification(msg, title, subtitle, image, iconType, flash, save, color)
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName(msg)
    if color then ThefeedNextPostBackgroundColor(color) end
    EndTextCommandThefeedPostMessagetext(image, image, flash, iconType, title, subtitle)
    EndTextCommandThefeedPostTicker(flash or false, save or false)
end

RegisterNetEvent('soz-hud:client:DrawAdvancedNotification', function(msg, title, subtitle, image, iconType, flash, save, color)
    DrawAdvancedNotification(msg, title, subtitle, image, iconType, flash, save, color)
end)

exports('DrawAdvancedNotification', function(msg, title, subtitle, image, iconType, flash, save, color)
    DrawAdvancedNotification(msg, title, subtitle, image, iconType, flash, save, color)
end)
