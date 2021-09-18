#!/usr/bin/env python

#  To run a flask server on your local machine - for debug stuff only

"""
testserver.py
"""

from sys import argv, exit, stderr
from app import app
import logging

def main(argv):
  if len(argv) != 2:
    print('Usage: ' + argv[0] + 'port', file=stderr)
    exit(1)
  try:
    port = int(argv[1])
  except:
    print('Port must be an integer.', file=stderr)
    exit(1)

  # suppress flask server output
  logger = logging.getLogger('werkzeug')
  handler = logging.FileHandler('server.log')
  logger.addHandler(handler)
  app.logger.addHandler(handler)

  app.run(host='127.0.0.1', port=port, debug=True)

if __name__ == '__main__':
  main(argv)

# I'm honestly not sure how to cite this - I've used iterations of this program
# for years just to run flask on my local machine and you can probably
# find it in a couple of my repositories
