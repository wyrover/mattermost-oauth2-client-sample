#!/bin/bash
rsync -avzh -e 'ssh -p XX' --progress --delete ./node_modules/mattermost-redux/ root@XXXXXX:/opt/mattermost_client/dist/node_modules/mattermost-redux/