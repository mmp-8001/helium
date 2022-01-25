import time
import os
import pandas as pd
import codecs


def blade():
    theme = (open("theme.html", "r")).read()
    theme_rtl = theme
    data = pd.read_csv("lang.csv")
    for i in range(data.shape[0]):
        theme_rtl = theme_rtl.replace("{{" + data.iloc[i, 0] + "}}", data.iloc[i, 2])
    f = codecs.open("index.html", 'w', encoding='utf')
    f.write(theme_rtl)
    f.close()


while 1:
    blade()
    time.sleep(0.3)
    os.system("sass --update --no-source-map --style=compressed scss/theme-ltr.scss:css/theme-ltr.css")
    os.system("sass --update --no-source-map --style=compressed scss/theme-rtl.scss:css/theme-rtl.css")
