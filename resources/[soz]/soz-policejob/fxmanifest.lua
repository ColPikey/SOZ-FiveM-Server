fx_version "cerulean"
lua54 "yes"
game "gta5"

description "SOZ Job Police"

shared_scripts {"config.lua", "shared/utils.lua"}

client_scripts {
    "@menuv/menuv.lua",
    "client/main.lua",
    "client/functions.lua",
    "client/animations.lua",
    "client/interactions/*.lua",
    "client/stations/*.lua",
}

server_scripts {"@oxmysql/lib/MySQL.lua", "server/main.lua"}
