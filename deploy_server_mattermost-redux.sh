#!/bin/bash
rsync -avzh -e 'ssh -p 29931' --progress --delete ./node_modules/mattermost-redux/ root@144.34.243.83:/opt/mattermost_client/dist/node_modules/mattermost-redux/