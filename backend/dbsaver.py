import sqlite3 as sql
import config


def create():
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.execute('''create table marks (Id INTEGER PRIMARY KEY, Type TEXT, Desk Text)''')
        con.commit()


def insert(album):
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.executemany("INSERT INTO marks(Type, Desk) VALUES (?,?)", album)
        con.commit()
    con.close()


def show():
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.execute("SELECT * FROM marks")
        con.commit()
        print(c.fetchall())


def drop():
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.execute("DROP TABLE marks")


def clear():
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.execute("DELETE FROM marks")


def get():
    con = sql.connect(config.DBPATH + 'bookmarks.db')
    with con:
        c = con.cursor()
        c.execute("SELECT DISTINCT Type FROM marks")
        con.commit()
        list = c.fetchall()
        s = []
        for i in range(len(list)):
            s.append(str(list[int(i)][0]))
        return s
def mark(type):
    con = sql.connect(config.DBPATH + 'bookmarks.db')

    with con:
        c = con.cursor()
        temp = "SELECT DISTINCT Desk FROM marks WHERE Type =" + chr(39) + type + chr(39)
        c.execute(temp)
        con.commit()
        list = c.fetchall()
        s = []
        for i in range(len(list)):
            s.append(str(list[int(i)][0]))
        return s

# create()
# drop()
# insert(album)
# clear()
# show()
# print(get())
