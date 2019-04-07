#!/usr/bin/env python

from selenium import webdriver

def retrieveCode(code1, code2, code3, pound, pence):
    CODE1=code1
    CODE2=code2
    CODE3=code3
    POUND=pound
    PENCE=pence

    driver = webdriver.Chrome()
    #driver = webdriver.Firefox(executable_path=r'/opt/bitnami/apps/django/django_projects/geckodriver', log_path="/opt/bitnami/apps/django/django_projects/geckodriver.log")
    try:
        driver.get('https://www.mcdfoodforthoughts.com/')

        # Select the continue box
        next_button = driver.find_element_by_id('NextButton')
        next_button.click()


        # Select the yes button
        yes_button = driver.find_elements_by_xpath("//*[contains(text(), 'Yes')]")[0]
        yes_button.click()


        # Click next
        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Code input
        code1 = driver.find_element_by_id('CN1')
        code1.send_keys(CODE1)

        code2 = driver.find_element_by_id('CN2')
        code2.send_keys(CODE2)

        code3 = driver.find_element_by_id('CN3')
        code3.send_keys(CODE3)

        # Amount Spent
        pound = driver.find_element_by_id('Pound')
        pound.send_keys(POUND)

        pence = driver.find_element_by_id('Pence')
        pence.send_keys(PENCE)

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Visit Type
        takeaway = driver.find_elements_by_xpath("//*[contains(text(), 'Takeaway')]")[0]
        takeaway.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Find all opt5 click it
        opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Select the yes button
        touch = driver.find_elements_by_xpath("//*[contains(text(), 'Touch Screen Order Point')]")[0]
        touch.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Find all opt5 click it
        opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Find all opt5 click it
        opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Find all opt5 click it
        opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # No problem encoutnerd
        # Find all opt5 click it
        opts = driver.find_elements_by_xpath("//*[@class='Opt2 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Mcdonald often
        opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # No written feedback
        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Ordered something else
        takeaway = driver.find_elements_by_xpath("//*[contains(text(), 'Something else')]")[0]
        takeaway.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # No interaction with stuff member
        takeaway = driver.find_elements_by_xpath("//*[contains(text(), 'I did not interact with a staff member')]")[0]
        takeaway.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Order accurate
        opts = driver.find_elements_by_xpath("//*[@class='Opt1 inputtyperbloption']")
        for opt in opts:
            radio = opt.find_elements_by_class_name("radioBranded")[0];
            radio.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # Some other reason
        takeaway = driver.find_elements_by_xpath("//*[contains(text(), 'Some other reason')]")[0]
        takeaway.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        # No reconigised
        takeaway = driver.find_elements_by_xpath("//*[contains(text(), 'No')]")[0]
        takeaway.click()

        next_button = driver.find_element_by_id('NextButton')
        next_button.click()

        from selenium.webdriver.support.ui import Select

        # Random selecting
        OfferCode = driver.find_elements_by_class_name("ValCode");
        maxTries = 10
        tries = 0
        while len(OfferCode) < 1 and tries < maxTries:
            # Click one radio
            radio = driver.find_elements_by_class_name("radioBranded");
            if len(radio) > 0:
                radio[0].click();
            
            # Find all opt5 click it
            opts = driver.find_elements_by_xpath("//*[@class='Opt5 inputtyperbloption']")
            for opt in opts:
                radio = opt.find_elements_by_class_name("radioBranded")[0];
                radio.click()
            
            # Click one no
            no = driver.find_elements_by_xpath("//*[contains(text(), 'No')]")
            if len(no) > 0:
                no[0].click()
            
            # click one checker
            checkers = driver.find_elements_by_class_name("checkboxBranded");
            if len(checkers) > 0:
                checkers[0].click();
            
            # Select all select boxes
            for sel in driver.find_elements_by_tag_name('select'):
                select = Select(sel)
                select.select_by_index(1)
            
            next_button = driver.find_element_by_id('NextButton')
            next_button.click()
            
            OfferCode = driver.find_elements_by_class_name("ValCode");
            tries += 1
        code = OfferCode[0].text
        driver.close()
        return code
    except:
        driver.close()
        return 'Invalid code/amount, please refresh and try again.'


# In[ ]:




