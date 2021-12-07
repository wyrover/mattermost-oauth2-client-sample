#!/bin/bash
rsync -avzh -e 'ssh -p 29931' --progress --exclude-from='exclude-file.txt' ./dist root@144.34.243.83:/opt/mattermost_client/