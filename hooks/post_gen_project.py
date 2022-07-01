import os
import shutil
from glob import glob

license_id = '{{ cookiecutter.license_id }}'
use_vuex = '{{ cookiecutter.use_vuex }}'

if license_id != 'None':
    os.rename('LICENSE.{{ cookiecutter.license_id }}', 'LICENSE')

for license_file in glob('LICENSE.*'):
    os.unlink(license_file)

if use_vuex == 'no':
    shutil.rmtree('src/store')
