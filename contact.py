#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import sys
import os
import re
import urllib2
import string
import datetime
from google.appengine.ext import db
from google.appengine.api import users
import logging
import lxml
import jinja2
import webapp2
jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))
from google.appengine.api import mail


class Contact(db.Model):
  """Creates a Contact"""
  name = db.StringProperty(multiline=True)
  address = db.StringProperty(multiline=True)
  address2 = db.StringProperty(multiline=True)
  phone = db.StringProperty(multiline=True)
  zip = db.StringProperty(multiline=True)
  state = db.StringProperty(multiline=True)
  city = db.StringProperty(multiline=True)
  message = db.StringProperty(multiline=True)
  email = db.StringProperty(multiline=True)
  date = db.DateTimeProperty(auto_now_add=True)


class MainHandler(webapp2.RequestHandler):
    def get(self):        
        template = jinja_environment.get_template('/html/contact.html')
        name = self.request.get('name')
        template_values = {
          'name' : name,
          'test' : 1
        }
        self.response.out.write(template.render(template_values))
        logging.info("HERE IS NAME:%s" % name)
class SubmitContact(webapp2.RequestHandler):
    def post(self):      
      name = self.request.get('name')
      email = self.request.get('email')
      message = self.request.get('message')
      phone = self.request.get('phone')
      address = self.request.get('address')
      address2 =self.request.get('address2')
      city = self.request.get('city')
      zip = self.request.get('zip')
      state = self.request.get('state')
      comments = self.request.get('comments')
      message += '''   
                        Message:
                        Contact Name : %s                        
                        Contact Email : %s
                        Optional Message : %s
                        Address : %s
                        Address2 : %s
                        City : %s
                        State : %s
                        Phone : %s
                    ''' % (name,email,comments,address,address2,city,state,phone)
      
      template_values = {
        'confirmation' : "<div class='confirmation'> Thank you for your submission. </div>"	
        }
      template = jinja_environment.get_template('/html/contact.html')           
      sender = self.request.get("email")
      subject = "Contact Information" + name
      body = message       
      message = mail.EmailMessage(sender="julian.tempelsman@gmail.com", subject=subject)
      message.to = "julian.tempelsman@gmail.com"
      message.body = body
      message.send()
      self.response.out.write(template.render(template_values))
      dataStoreContact = Contact(key_name=name+email, name=name,email=email,city=city,
            state=state,zip=zip,address=address,address2=address2)
      try:
        dataStoreContact.put()
      # print "<br/> *******  EVENT ******** <br/>"
      # myEvent.prettyPrint()
      except UnicodeDecodeError,e:
        logging.info(e)
        logging.info("\n *******  ERROR ******** \n")
  
                

app = webapp2.WSGIApplication([
    ('/contact', MainHandler),
    ('/contact_submit', SubmitContact),
    
], debug=True)