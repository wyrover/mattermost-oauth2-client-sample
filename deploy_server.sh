#!/bin/bash
rsync -avzh -e 'ssh -p XX' --progress --delete ./dist root@XXXXXX:/opt/mattermost_client/